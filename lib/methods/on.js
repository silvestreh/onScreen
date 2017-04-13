/**
 * Starts tracking elements matching a CSS selector
 *
 * @param {string} event The event you want to track (enter or leave)
 * @param {string} selector The element you want to track
 * @param {function} callback The callback function to handle the event
 * @return {void}
 */
function on(event, selector, callback) {
    const allowed = ['enter', 'leave'];

    if (!event) throw new Error('No event given. Choose either enter or leave');
    if (!selector) throw new Error('No selector to track');
    if (allowed.indexOf(event) < 0) throw new Error(`${event} event is not supported`);

    if (!{}.hasOwnProperty.call(this.trackedElements, selector)) {
        this.trackedElements[selector] = {};
    }

    this.trackedElements[selector].nodes = [];

    for (let i = 0, elems = document.querySelectorAll(selector); i < elems.length; i++) {
        const item = {
            isVisible: false,
            wasVisible: false,
            node: elems[i]
        };

        this.trackedElements[selector].nodes.push(item);
    }

    if (typeof callback === 'function') {
        if (!this.trackedElements[selector][event]) {
            this.trackedElements[selector][event] = {};
        }

        this.trackedElements[selector][event][(callback.name || 'anonymous')] = callback;
    }
}

export default on;
