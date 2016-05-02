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

    if (!this.trackedElements.hasOwnProperty(selector)) {
        this.trackedElements[selector] = {};
    }

    this.trackedElements[selector].nodes = [];

    for (let i = 0; i < document.querySelectorAll(selector).length; i++) {
        const item = {
            isVisible: false,
            wasVisible: false,
            node: document.querySelectorAll(selector)[i]
        };

        this.trackedElements[selector].nodes.push(item);
    }

    if (typeof this.trackedElements[selector][event] === 'function' &&
        typeof callback === 'function') {
        console.warn(`${selector}'s ${event} callback was overridden`);
    }

    if (typeof callback === 'function') {
        this.trackedElements[selector][event] = callback;
    }
}

export default on;
