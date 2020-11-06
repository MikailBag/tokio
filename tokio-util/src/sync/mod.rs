//! Synchronization primitives

mod mpsc;
pub use mpsc::Sender;

#[cfg(test)]
mod tests;
