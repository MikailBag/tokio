#![cfg_attr(not(feature = "sync"), allow(dead_code, unreachable_pub))]

pub(super) mod block;

mod bounded;
pub use self::bounded::{channel, Permit, Receiver, Sender};

mod chan;

pub(super) mod list;

//mod unbounded;
//pub use self::unbounded::{unbounded_channel, UnboundedReceiver, UnboundedSender};

pub mod error;

/// The number of values a block can contain.
///
/// This value must be a power of 2. It also must be smaller than the number of
/// bits in `usize`.
#[cfg(all(target_pointer_width = "64", not(loom)))]
const BLOCK_CAP: usize = 32;

#[cfg(all(not(target_pointer_width = "64"), not(loom)))]
const BLOCK_CAP: usize = 16;

#[cfg(loom)]
const BLOCK_CAP: usize = 2;
