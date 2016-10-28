/**
 * Observes DOM mutations and runs a callback function when
 * detecting one.
 *
 * @param {node} obj The DOM node you want to observe
 * @param {function} callback The callback function you want to call
 * @param {object} options
 * @return {void}
 */
function observeDOM(obj, callback, options = { throttle: 100 }) {
    let timeout;

    const debouncedCallback = () => {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            callback();
        }, options.throttle);
    };

    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    /* istanbul ignore else */
    if (MutationObserver) {
        const obs = new MutationObserver(debouncedCallback);

        obs.observe(obj, {
            childList: true,
            subtree: true
        });
    } else {
        obj.addEventListener('DOMNodeInserted', debouncedCallback, false);
        obj.addEventListener('DOMNodeRemoved', debouncedCallback, false);
    }
}

export default observeDOM;
