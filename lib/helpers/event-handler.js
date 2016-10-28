import onScreen from './on-screen';

// TODO: Refactor this so it can be easily tested
/* istanbul ignore next */
function eventHandler(trackedElements = {}, options = { tolerance: 0 }) {
    const selectors = Object.keys(trackedElements);

    if (!selectors.length) return;

    selectors.forEach((selector) => {
        const tracked = trackedElements[selector];
        const previousNodes = tracked.nodes;

        tracked.nodes = [];

        const currentNodes = document.querySelectorAll(selector);

        for (let i = 0; i < currentNodes.length; i++) {
            const currentNode = currentNodes[i];

            let wasVisible = false;
            if (previousNodes) {
                previousNodes.forEach((previousItem) => {
                    const previousNode = previousItem.node;
                    if (!previousItem.marked && previousNode === currentNode) {
                        wasVisible = previousItem.isVisible;
                        previousItem.marked = true;
                    }
                });
            }

            const item = {
                isVisible: onScreen(currentNode, options),
                wasVisible,
                node: currentNode
            };

            tracked.nodes.push(item);

            if (item.isVisible === true && item.wasVisible === false) {
                if (typeof tracked.enter === 'function') {
                    tracked.enter(item.node);
                }
            }
            if (item.isVisible === false && item.wasVisible === true) {
                if (typeof tracked.leave === 'function') {
                    tracked.leave(item.node);
                }
            }
        }

        if (previousNodes) {
            // for removed nodes
            previousNodes.forEach((previousItem) => {
                if (!previousItem.marked) {
                    if (previousItem.wasVisible) {
                        if (typeof tracked.leave === 'function') {
                            tracked.leave(previousItem.node);
                        }
                    }
                }
            });
        }
    });
}

export default eventHandler;
