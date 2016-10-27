/**
 * @since 2016-10-27 20:56
 * @author vivaxy
 */

const stylesToCheck = {
    display: 'none',
    visibility: 'hidden'
};

const isElementVisible = (el) => {
    if (!el) {
        throw new Error('You should specify the element you want to test');
    }

    if (typeof el === 'string') {
        el = document.querySelector(el);
    }

    const style = window.getComputedStyle(el);

    return !Object.keys(stylesToCheck).some(st => {
        return style[st] === stylesToCheck[st];
    });
};

/**
 * Checks an element is visible to user or not
 * @param el
 */
export default (el) => {
    if (!el) {
        throw new Error('You should specify the element you want to test');
    }

    if (typeof el === 'string') {
        el = document.querySelector(el);
    }

    let visible = true;
    let currentNode = el;

    while (currentNode.parentNode && visible) {
        visible = isElementVisible(currentNode);
        currentNode = currentNode.parentNode;
    }

    return visible;
};
