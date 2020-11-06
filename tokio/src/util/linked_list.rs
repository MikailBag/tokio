#![cfg_attr(not(feature = "full"), allow(dead_code))]

//! An intrusive double linked list of data
//!
//! The data structure supports tracking pinned nodes. Most of the data
//! structure's APIs are `unsafe` as they require the caller to ensure the
//! specified node is actually contained by the list.

use core::fmt;
use core::marker::PhantomData;
use core::mem::ManuallyDrop;
use core::ptr::NonNull;

/// An intrusive linked list.
///
/// Currently, the list is not emptied on drop. It is the caller's
/// responsibility to ensure the list is empty before dropping it.
pub(crate) struct LinkedList<L, T> {
    /// Linked list head
    head: Option<NonNull<T>>,

    /// Linked list tail
    tail: Option<NonNull<T>>,

    /// Node type marker.
    _marker: PhantomData<*const L>,
}

unsafe impl<L: Link> Send for LinkedList<L, L::Target> where L::Target: Send {}
unsafe impl<L: Link> Sync for LinkedList<L, L::Target> where L::Target: Sync {}

/// Defines how a type is tracked within a linked list.
///
/// In order to support storing a single type within multiple lists, accessing
/// the list pointers is decoupled from the entry type.
///
/// # Safety
///
/// Implementations must guarantee that `Target` types are pinned in memory. In
/// other words, when a node is inserted, the value will not be moved as long as
/// it is stored in the list.
pub(crate) unsafe trait Link {
    /// Handle to the list entry.
    ///
    /// This is usually a pointer-ish type.
    type Handle;

    /// Node type
    type Target;

    /// Convert the handle to a raw pointer without consuming the handle
    fn as_raw(handle: &Self::Handle) -> NonNull<Self::Target>;

    /// Convert the raw pointer to a handle
    unsafe fn from_raw(ptr: NonNull<Self::Target>) -> Self::Handle;

    /// Return the pointers for a node
    unsafe fn pointers(target: NonNull<Self::Target>) -> NonNull<Pointers<Self::Target>>;
}

/// Previous / next pointers
pub(crate) struct Pointers<T> {
    /// The previous node in the list. null if there is no previous node.
    prev: Option<NonNull<T>>,

    /// The next node in the list. null if there is no previous node.
    next: Option<NonNull<T>>,
}

unsafe impl<T: Send> Send for Pointers<T> {}
unsafe impl<T: Sync> Sync for Pointers<T> {}

// ===== impl LinkedList =====

impl<L, T> LinkedList<L, T> {
    /// Creates an empty linked list.
    pub(crate) const fn new() -> LinkedList<L, T> {
        LinkedList {
            head: None,
            tail: None,
            _marker: PhantomData,
        }
    }
}

impl<L: Link> LinkedList<L, L::Target> {
    /// Adds an element first in the list.
    pub(crate) fn push_front(&mut self, val: L::Handle) {
        // The value should not be dropped, it is being inserted into the list
        let val = ManuallyDrop::new(val);
        let ptr = L::as_raw(&*val);
        assert_ne!(self.head, Some(ptr));
        unsafe {
            L::pointers(ptr).as_mut().next = self.head;
            L::pointers(ptr).as_mut().prev = None;

            if let Some(head) = self.head {
                L::pointers(head).as_mut().prev = Some(ptr);
            }

            self.head = Some(ptr);

            if self.tail.is_none() {
                self.tail = Some(ptr);
            }
        }
    }

    /// Removes the last element from a list and returns it, or None if it is
    /// empty.
    pub(crate) fn pop_back(&mut self) -> Option<L::Handle> {
        unsafe {
            let last = self.tail?;
            self.tail = L::pointers(last).as_ref().prev;

            if let Some(prev) = L::pointers(last).as_ref().prev {
                L::pointers(prev).as_mut().next = None;
            } else {
                self.head = None
            }

            L::pointers(last).as_mut().prev = None;
            L::pointers(last).as_mut().next = None;

            Some(L::from_raw(last))
        }
    }

    /// Returns whether the linked list doesn not contain any node
    pub(crate) fn is_empty(&self) -> bool {
        if self.head.is_some() {
            return false;
        }

        assert!(self.tail.is_none());
        true
    }

    /// Removes the specified node from the list
    ///
    /// # Safety
    ///
    /// The caller **must** ensure that `node` is currently contained by
    /// `self` or not contained by any other list.
    pub(crate) unsafe fn remove(&mut self, node: NonNull<L::Target>) -> Option<L::Handle> {
        if let Some(prev) = L::pointers(node).as_ref().prev {
            debug_assert_eq!(L::pointers(prev).as_ref().next, Some(node));
            L::pointers(prev).as_mut().next = L::pointers(node).as_ref().next;
        } else {
            if self.head != Some(node) {
                return None;
            }

            self.head = L::pointers(node).as_ref().next;
        }

        if let Some(next) = L::pointers(node).as_ref().next {
            debug_assert_eq!(L::pointers(next).as_ref().prev, Some(node));
            L::pointers(next).as_mut().prev = L::pointers(node).as_ref().prev;
        } else {
            // This might be the last item in the list
            if self.tail != Some(node) {
                return None;
            }

            self.tail = L::pointers(node).as_ref().prev;
        }

        L::pointers(node).as_mut().next = None;
        L::pointers(node).as_mut().prev = None;

        Some(L::from_raw(node))
    }
}

impl<L: Link> fmt::Debug for LinkedList<L, L::Target> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_struct("LinkedList")
            .field("head", &self.head)
            .field("tail", &self.tail)
            .finish()
    }
}

#[cfg(any(
    feature = "fs",
    all(unix, feature = "process"),
    feature = "signal",
    feature = "sync",
))]
impl<L: Link> LinkedList<L, L::Target> {
    pub(crate) fn last(&self) -> Option<&L::Target> {
        let tail = self.tail.as_ref()?;
        unsafe { Some(&*tail.as_ptr()) }
    }
}

impl<L: Link> Default for LinkedList<L, L::Target> {
    fn default() -> Self {
        Self::new()
    }
}

// ===== impl Iter =====

cfg_rt_multi_thread! {
    pub(crate) struct Iter<'a, T: Link> {
        curr: Option<NonNull<T::Target>>,
        _p: core::marker::PhantomData<&'a T>,
    }

    impl<L: Link> LinkedList<L, L::Target> {
        pub(crate) fn iter(&self) -> Iter<'_, L> {
            Iter {
                curr: self.head,
                _p: core::marker::PhantomData,
            }
        }
    }

    impl<'a, T: Link> Iterator for Iter<'a, T> {
        type Item = &'a T::Target;

        fn next(&mut self) -> Option<&'a T::Target> {
            let curr = self.curr?;
            // safety: the pointer references data contained by the list
            self.curr = unsafe { T::pointers(curr).as_ref() }.next;

            // safety: the value is still owned by the linked list.
            Some(unsafe { &*curr.as_ptr() })
        }
    }
}

// ===== impl DrainFilter =====

cfg_io_readiness! {
    pub(crate) struct DrainFilter<'a, T: Link, F> {
        list: &'a mut LinkedList<T, T::Target>,
        filter: F,
        curr: Option<NonNull<T::Target>>,
    }

    impl<T: Link> LinkedList<T, T::Target> {
        pub(crate) fn drain_filter<F>(&mut self, filter: F) -> DrainFilter<'_, T, F>
        where
            F: FnMut(&mut T::Target) -> bool,
        {
            let curr = self.head;
            DrainFilter {
                curr,
                filter,
                list: self,
            }
        }
    }

    impl<'a, T, F> Iterator for DrainFilter<'a, T, F>
    where
        T: Link,
        F: FnMut(&mut T::Target) -> bool,
    {
        type Item = T::Handle;

        fn next(&mut self) -> Option<Self::Item> {
            while let Some(curr) = self.curr {
                // safety: the pointer references data contained by the list
                self.curr = unsafe { T::pointers(curr).as_ref() }.next;

                // safety: the value is still owned by the linked list.
                if (self.filter)(unsafe { &mut *curr.as_ptr() }) {
                    return unsafe { self.list.remove(curr) };
                }
            }

            None
        }
    }
}

// ===== impl Pointers =====

impl<T> Pointers<T> {
    /// Create a new set of empty pointers
    pub(crate) fn new() -> Pointers<T> {
        Pointers {
            prev: None,
            next: None,
        }
    }
}

impl<T> fmt::Debug for Pointers<T> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_struct("Pointers")
            .field("prev", &self.prev)
            .field("next", &self.next)
            .finish()
    }
}
