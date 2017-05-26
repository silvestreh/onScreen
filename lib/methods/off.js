/**
 * Stops tracking elements matching a CSS selector. If a selector has no
 * callbacks it gets removed.
 *
 * @param {string} event The event you want to stop tracking (enter or leave)
 * @param {string} selector The CSS selector you want to stop tracking
 * @return {void}
 */
function off(event, selector, handler) {
    const enterCallbacks = Object.keys(this.trackedElements[selector].enter || {});
    const leaveCallbacks = Object.keys(this.trackedElements[selector].leave || {});

    if ({}.hasOwnProperty.call(this.trackedElements, selector)) {
        if (handler) {
            if (this.trackedElements[selector][event]) {
                const callbackName = (typeof handler === 'function') ? handler.name : handler;
                delete this.trackedElements[selector][event][callbackName];
            }
        } else {
            delete this.trackedElements[selector][event];
        }
    }

    if (!enterCallbacks.length && !leaveCallbacks.length) {
        delete this.trackedElements[selector];
    }
}

export default off;
