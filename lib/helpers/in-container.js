/**
 * Checks an element's position in respect to a HTMLElement
 * and determines wether it's within its boundaries.
 *
 * @param {node} element The DOM node you want to check
 * @return {boolean} A boolean value that indicates wether is on or off the container.
 */
function inContainer(el, options = { tolerance: 0, container: '' }) {
    if (!el) {
        throw new Error('You should specify the element you want to test');
    }

    if (typeof el === 'string') {
        el = document.querySelector(el);
    }
    if (typeof options === 'string') {
        options = {
            tolerance: 0,
            container: document.querySelector(options)
        };
    }
    if (typeof options.container === 'string') {
        options.container = document.querySelector(options.container);
    }
    if (options instanceof HTMLElement) {
        options = {
            tolerance: 0,
            container: options
        };
    }
    if (!options.container) {
        throw new Error('You should specify a container element');
    }

    const containerRect = options.container.getBoundingClientRect();

    return (
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

export default inContainer;
