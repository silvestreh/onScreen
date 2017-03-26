import inViewport from './in-viewport';
import inContainer from './in-container';

// TODO: Refactor this so it can be easily tested
/* istanbul ignore next */
function eventHandler(trackedElements = {}, options = { tolerance: 0 }) {
    const selectors = Object.keys(trackedElements);
    let testVisibility;

    if (!selectors.length) return;

    if (options.container === window) {
        testVisibility = inViewport;
    } else {
        testVisibility = inContainer;
    }

    selectors.forEach((selector) => {
        trackedElements[selector].nodes.forEach((item) => {
            if (testVisibility(item.node, options)) {
                item.wasVisible = item.isVisible;
                item.isVisible = true;
            } else {
                item.wasVisible = item.isVisible;
                item.isVisible = false;
            }
            if (item.isVisible === true && item.wasVisible === false) {
                if (!trackedElements[selector].enter) return;

                Object.keys(trackedElements[selector].enter).forEach((callback) => {
                    if (typeof trackedElements[selector].enter[callback] === 'function') {
                        trackedElements[selector].enter[callback](item.node, 'enter');
                    }
                });
            }
            if (item.isVisible === false && item.wasVisible === true) {
                if (!trackedElements[selector].leave) return;

                Object.keys(trackedElements[selector].leave).forEach((callback) => {
                    if (typeof trackedElements[selector].leave[callback] === 'function') {
                        trackedElements[selector].leave[callback](item.node, 'leave');
                    }
                });
            }
        });
    });
}

export default eventHandler;
