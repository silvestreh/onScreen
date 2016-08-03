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

        const lastHorizontalScroll = this.prevScrollStatus.x;
        const lastVerticalScroll = this.prevScrollStatus.y;

        const currentHorizontalScroll = window.scrollX;
        const currentVerticalScroll = window.scrollY;

        this.prevScrollStatus.x = currentHorizontalScroll;
        this.prevScrollStatus.y = currentVerticalScroll;

        const direction = {
            up: currentVerticalScroll - lastVerticalScroll < 0,
            down: currentVerticalScroll - lastVerticalScroll > 0,
            left: currentHorizontalScroll - lastHorizontalScroll < 0,
            right: currentHorizontalScroll - lastHorizontalScroll > 0
        };

        timeout = setTimeout(() => {
            scrollHandler(this.trackedElements, direction, this.options);
        }, this.options.throttle);
    };
}

export default debouncedScroll;
