/**
 * Observes DOM mutations and runs a callback function when
 * detecting one.
 *
 * @param {node} obj The DOM node you want to observe
 * @param {function} callback The callback function you want to call
 * @return {void}
 */
function observeDOM(obj, callback) {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    /* istanbul ignore else */
    if (MutationObserver) {
        const obs = new MutationObserver(callback);

        obs.observe(obj, {
            childList: true,
            subtree: true
        });
    } else {
        obj.addEventListener('DOMNodeInserted', callback, false);
        obj.addEventListener('DOMNodeRemoved', callback, false);
    }
}

export default observeDOM;
