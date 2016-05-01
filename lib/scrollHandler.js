import insideViewport from './insideViewport';

export default function eventHandler(trackedElements = {}, options = { tolerance: 0 }) {
    const selectors = Object.keys(trackedElements);

    if (!selectors.length) return;

    selectors.forEach((selector) => {
        trackedElements[selector].nodes.forEach((item) => {
            if (insideViewport(item.node, options)) {
                item.wasVisible = item.isVisible;
                item.isVisible = true;
            } else {
                item.wasVisible = item.isVisible;
                item.isVisible = false;
            }
            if (item.isVisible === true && item.wasVisible === false) {
                if (typeof trackedElements[selector].enter === 'function') {
                    trackedElements[selector].enter(item.node);
                }
            }
            if (item.isVisible === false && item.wasVisible === true) {
                if (typeof trackedElements[selector].leave === 'function') {
                    trackedElements[selector].leave(item.node);
                }
            }
        });
    });
}
