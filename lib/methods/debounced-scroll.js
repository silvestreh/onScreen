import eventHandler from '../helpers/event-handler';

/**
 * Debounces the scroll event to avoid performance issues
 *
 * @return {void}
 */
function debouncedScroll() {
    let timeout;

    return () => {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            eventHandler(this.trackedElements, this.options);
        }, this.options.throttle);
    };
}

export default debouncedScroll;
