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
                for (let j = 0; j < previousNodes.length; j++) {
                    const previousItem = previousNodes[j];
                    const previousNode = previousItem.node;
                    if (previousNode === currentNode) {
                        wasVisible = previousItem.isVisible;
                    }
                }
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
    });
}

export default eventHandler;
