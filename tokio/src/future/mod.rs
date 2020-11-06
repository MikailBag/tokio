#![cfg_attr(not(feature = "macros"), allow(unreachable_pub))]


mod poll_fn;
pub use poll_fn::poll_fn;

cfg_sync! {
    mod block_on;
    pub(crate) use block_on::block_on;
}
