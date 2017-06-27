import scrollHandler from '../helpers/scroll-handler';

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
            scrollHandler(this.trackedElements, this.options);
        }, this.options.debounce);
    };
}

export default debouncedScroll;
