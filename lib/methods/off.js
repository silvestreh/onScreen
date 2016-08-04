/**
 * Stops tracking elements matching a CSS selector. If a selector has no
 * callbacks it gets removed.
 *
 * @param {string} event The event you want to stop tracking (enter or leave)
 * @param {string} selector The CSS selector you want to stop tracking
 * @return {void}
 */
function off(event, selector) {
    if ({}.hasOwnProperty.call(this.trackedElements, selector)) {
        if (this.trackedElements[selector][event]) {
            delete this.trackedElements[selector][event];
        }
    }
    if (!this.trackedElements[selector].enter && !this.trackedElements[selector].leave) {
        delete this.trackedElements[selector];
    }
}

export default off;
