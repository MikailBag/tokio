pub(crate) fn block_on<F: std::future::Future>(fut: F) -> F::Output {
    crate::pin!(fut);
    let mut cx = std::task::Context::from_waker(futures_util::task::noop_waker_ref());
    loop {
        if let std::task::Poll::Ready(r) = fut.as_mut().poll(&mut cx) {
            return r;
        }
    }
}