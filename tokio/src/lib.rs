#![doc(html_root_url = "https://docs.rs/tokio/0.3.3")]
#![allow(
    clippy::cognitive_complexity,
    clippy::large_enum_variant,
    clippy::needless_doctest_main
)]
#![warn(
    missing_debug_implementations,
    missing_docs,
    rust_2018_idioms,
    unreachable_pub
)]
#![cfg_attr(docsrs, deny(broken_intra_doc_links))]
#![doc(test(
    no_crate_inject,
    attr(deny(warnings, rust_2018_idioms), allow(dead_code, unused_variables))
))]
#![cfg_attr(docsrs, feature(doc_cfg))]

#[macro_use]
#[doc(hidden)]
pub mod macros;



mod future;

mod loom;

cfg_sync! {
    pub mod sync;
}

mod util;

cfg_macros! {
    /// Implementation detail of the `select!` macro. This macro is **not**
    /// intended to be used as part of the public API and is permitted to
    /// change.
    #[doc(hidden)]
    pub use tokio_macros::select_priv_declare_output_enum;

    cfg_rt! {
        cfg_rt_multi_thread! {
            // This is the docs.rs case (with all features) so make sure macros
            // is included in doc(cfg).

            #[cfg(not(test))] // Work around for rust-lang/rust#62127
            #[cfg_attr(docsrs, doc(cfg(feature = "macros")))]
            pub use tokio_macros::main;

            #[cfg_attr(docsrs, doc(cfg(feature = "macros")))]
            pub use tokio_macros::test;
        }

        cfg_not_rt_multi_thread! {
            #[cfg(not(test))] // Work around for rust-lang/rust#62127
            pub use tokio_macros::main_rt as main;
            pub use tokio_macros::test_rt as test;
        }
    }

    // Always fail if rt is not enabled.
    cfg_not_rt! {
        #[cfg(not(test))]
        pub use tokio_macros::main_fail as main;
        pub use tokio_macros::test_fail as test;
    }
}
