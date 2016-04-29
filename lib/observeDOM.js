const observeDOM = (function observeDOM() {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    const eventListenerSupported = window.addEventListener;

    return function observer(obj, callback) {
        if (MutationObserver) {
            // define a new observer
            const obs = new MutationObserver((mutations) => {
                if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) callback();
            });
            // have the observer observe foo for changes in children
            obs.observe(obj, {
                childList: true,
                subtree: true
            });
        } else if (eventListenerSupported) {
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    };
}());

export default observeDOM;
