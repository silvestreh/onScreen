import debounceCallback from '../methods/debounce';

/**
 * Observes DOM mutations and runs a callback function when
 * detecting one.
 *
 * @param {node} obj The DOM node you want to observe
 * @param {function} callback The callback function you want to call
 * @param {object} options
 * @return {void}
 */
function observeDOM(obj, callback, options = { debounce: 100 }) {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    const debouncedCallback = debounceCallback(callback, options.debounce);

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
