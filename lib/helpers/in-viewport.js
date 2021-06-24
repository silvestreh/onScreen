/**
 * Checks an element's position in respect to the viewport
 * and determines wether it's inside the viewport.
 *
 * @param {node} element The DOM node you want to check
 * @return {boolean} A boolean value that indicates wether is on or off the viewport.
 */
function inViewport(el, options = { tolerance: { top: 0, right: 0, bottom: 0, left: 0 } }) {
    if (!el) {
        throw new Error('You should specify the element you want to test');
    }

    if (typeof el === 'string') {
        el = document.querySelector(el);
    }

    const elRect = el.getBoundingClientRect();

    return (
        // Check bottom boundary
        elRect.bottom - options.tolerance.bottom > 0 &&

        // Check right boundary
        elRect.right - options.tolerance.right > 0 &&

        // Check left boundary
        elRect.left + options.tolerance.left < (window.innerWidth ||
        document.documentElement.clientWidth) &&

        // Check top boundary
        elRect.top + options.tolerance.top < (window.innerHeight ||
        document.documentElement.clientHeight)
    );
}

export default inViewport;
