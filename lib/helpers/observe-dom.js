/**
 * Observes DOM mutations and runs a callback function when
 * detecting one.
 *
 * @param {node} obj The DOM node you want to observe
 * @param {function} callback The callback function you want to call
 * @return {MutationObserver} obs The mutation observer instance used to track DOM mutations
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

        return obs;
    }

    obj.addEventListener('DOMNodeInserted', callback, false);
    obj.addEventListener('DOMNodeRemoved', callback, false);

    return null;
}

export default observeDOM;
