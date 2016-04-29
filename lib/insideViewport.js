
/**
 * Checks an element's position in respect to the viewport
 * and determines wether it's inside the viewport.
 *
 * @param {node} element The DOM node you want to check
 */
function insideViewport(el, options = { tolerance: 0 }) {
    var rect = el.getBoundingClientRect();

    return (
        rect.bottom - options.tolerance > 0 &&
        rect.right - options.tolerance > 0 &&
        rect.left + options.tolerance < (window.innerWidth ||
        document.documentElement.clientWidth) &&
        rect.top + options.tolerance < (window.innerHeight ||
        document.documentElement.clientHeight)
    );
}

export default insideViewport;
