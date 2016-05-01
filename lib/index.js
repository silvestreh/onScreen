import scrollHandler from './scrollHandler';
import observeDOM from './observeDOM';

export default class OnScreen {
    constructor(options = { tolerance: 0, debounce: 100 }) {
        this.options = options;
        this.trackedElements = {};
        this.attached = false;

        if (!this.options.tolerance) {
            this.options.tolerance = 0;
        }

        if (!this.options.debounce) {
            this.options.debounce = 100;
        }

        this.scroll = this.debouncedScroll.call(this);
        this.attach();

        // Observe DOM changes and start tracking newly added nodes
        observeDOM(document.querySelector('body'), () => {
            Object.keys(this.trackedElements).forEach((element) => {
                this.on('enter', element);
                this.on('leave', element);
            });
        });
    }

    /**
     * Debounces the scroll event to avoid performance issues
     *
     * @return {void}
     */
    debouncedScroll() {
        var timeout;

        return () => {
            clearTimeout(timeout);

            timeout = setTimeout(() => {
                scrollHandler(this.trackedElements, this.options);
            }, this.options.throttle);
        };
    }

    /**
     * Attaches the scroll event handler
     *
     * @return {void}
     */
    attach() {
        window.addEventListener('scroll', this.scroll);
        window.addEventListener('resize', this.scroll);
        this.attached = true;
    }

    /**
     * Removes the scroll event handler
     *
     * @return {void}
     */
    destroy() {
        window.removeEventListener('scroll', this.scroll);
        window.removeEventListener('resize', this.scroll);
        this.attached = false;
    }

    /**
     * Starts tracking elements matching a CSS selector
     *
     * @param {string} event The event you want to track (enter or leave)
     * @param {string} selector The element you want to track
     * @param {function} callback The callback function to handle the event
     * @return {void}
     */
    on(event, selector, callback) {
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

    /**
     * Stops tracking elements matching a CSS selector
     *
     * @param {string} event The event you want to stop tracking (enter or leave)
     * @param {string} selector The CSS selector you want to stop tracking
     * @return {void}
     */
    off(event, selector) {
        if (this.trackedElements.hasOwnProperty(selector)) {
            if (this.trackedElements[selector][event]) {
                delete this.trackedElements[selector][event];
            } else {
                console.warn(`${selector} had no ${event} callback defined`);
            }
        }
    }
}
