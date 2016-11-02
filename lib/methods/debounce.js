/**
 * debounce
 *  - the scroll event to avoid performance issues
 *  - the mutation event
 * @return {void}
 */
export default (callback, debounce) => {
    let timeout;

    return () => {
        clearTimeout(timeout);

        timeout = setTimeout(callback, debounce);
    };
};
