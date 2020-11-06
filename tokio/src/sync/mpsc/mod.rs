pub(super) mod block;

mod bounded;
pub use self::bounded::{channel, Permit, Receiver, Sender};

mod chan;

pub(super) mod list;

pub mod error;

/// The number of values a block can contain.
///
/// This value must be a power of 2. It also must be smaller than the number of
/// bits in `usize`.
const BLOCK_CAP: usize = 32;
