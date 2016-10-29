/**
 * @since 2016-10-28 12:52
 * @author vivaxy
 */
import inViewport from './in-viewport';
import inContainer from './in-container';
import isVisible from './is-visible';
import isValid from './is-valid';

export default (element, options = { tolerance: 0, container: window }) => {
    let testVisibility;
    if (options.container === window) {
        testVisibility = inViewport;
    } else {
        testVisibility = inContainer;
    }
    return testVisibility(element, options) && isVisible(element) && isValid(element);
};
