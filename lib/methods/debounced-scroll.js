import scrollHandler from '../helpers/scroll-handler';

/**
 * Debounces the scroll event to avoid performance issues
 *
 * @return {void}
 */
function debouncedScroll() {
    let timeout;

    if (this.options.debounce === false) {
        return () => scrollHandler(this.trackedElements, this.options);
    }

    return () => {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            scrollHandler(this.trackedElements, this.options);
        }, this.options.debounce);
    };
}

export default debouncedScroll;
