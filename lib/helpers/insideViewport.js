/**
 * Checks an element's position in respect to the viewport
 * and determines wether it's inside the viewport.
 *
 * @param {node} element The DOM node you want to check
 * @return {boolean} A boolean value that indicates wether is on or off the viewport.
 */
function insideViewport(el, options = { tolerance: 0, container: window }) {
    if (!el) return false;

    if (typeof el === 'string') {
        el = document.querySelector(el);
    }
    if (typeof options === 'string') {
        options = { container: document.querySelector(options) };
    }

    let visible;
    const elRect = el.getBoundingClientRect();

    if (options.container === window) {
        visible = (
            // Check bottom boundary
            elRect.bottom - options.tolerance > 0 &&

            // Check right boundary
            elRect.right - options.tolerance > 0 &&

            // Check left boundary
            elRect.left + options.tolerance < (window.innerWidth ||
            document.documentElement.clientWidth) &&

            // Check top boundary
            elRect.top + options.tolerance < (window.innerHeight ||
            document.documentElement.clientHeight)
        );
    } else {
        const containerRect = options.container.getBoundingClientRect();

        visible = (
            // // Check bottom boundary
            (el.offsetTop + el.clientHeight) - options.tolerance >
            options.container.scrollTop &&

            // Check right boundary
            (el.offsetLeft + el.clientWidth) - options.tolerance >
            options.container.scrollLeft &&

            // Check left boundary
            el.offsetLeft + options.tolerance <
            containerRect.width + options.container.scrollLeft &&

            // // Check top boundary
            el.offsetTop + options.tolerance <
            containerRect.height + options.container.scrollTop
        );
    }

    return visible;
}

export default insideViewport;
