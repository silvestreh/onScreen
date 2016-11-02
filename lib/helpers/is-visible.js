/**
 * @since 2016-10-27 20:56
 * @author vivaxy
 */

const stylesToCheck = {
    display: 'none',
    visibility: 'hidden'
};

// TODO hidden attr with none empty string will also makes element invisible
const attributesToCheck = {
    hidden: true
};

const isElementVisible = (el) => {
    const style = window.getComputedStyle(el);

    const passedStylesCheck = !Object.keys(stylesToCheck).some((st) =>
    style[st] === stylesToCheck[st]);

    const passedAttributesCheck = !Object.keys(attributesToCheck).some((attr) =>
    el[attr] === attributesToCheck[attr]);

    return passedStylesCheck && passedAttributesCheck;
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
