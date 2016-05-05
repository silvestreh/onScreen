var OnScreen = require('onscreen');

function addClass(element, className) {
    var classes = element.getAttribute('class') || '';

    // Not using element.classList because is not supported in IE9
    element.setAttribute('class', classes + ' ' + className);
}

function removeClass(element, className) {
    var classes = element.getAttribute('class') || '';

    // Not using element.classList because is not supported in IE9
    element.setAttribute('class', classes.replace(' ' + className, ''));
}

function destroy() {
    os.destroy();
    osVertical.destroy();
    osHorizontal.destroy();
}

function attach() {
    os.attach();
    osVertical.attach();
    osHorizontal.attach();
}

// Document ready
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.js-destroy').addEventListener('click', destroy);
    document.querySelector('.js-attach').addEventListener('click', attach);
}, false);

// Container is window
var os = new OnScreen({
    tolerance: 50
});

os.on('enter', '.target', function (element) {
    // Using jQuery: $(element).addClass('onScreen');
    addClass(element, 'onScreen');
});

os.on('leave', '.target', function (element) {
    // Using jQuery: $(element).removeClass('onScreen');
    removeClass(element, 'onScreen');
});


// Container is element (vertical orientation)
var osVertical = new OnScreen({
    container: '.container .vertical',
    tolerance: 20
});

osVertical.on('enter', '.vertical .contained', function (element) {
    // You can use jQuery with $(element)
    addClass(element, 'onScreen');
});

osVertical.on('leave', '.vertical .contained', function (element) {
    // You can use jQuery with $(element)
    removeClass(element, 'onScreen');
});

// Container is element (horizontal orientation)
var osHorizontal = new OnScreen({
    container: '.container .horizontal',
    tolerance: 20
});

osHorizontal.on('enter', '.horizontal .contained', function (element) {
    // You can use jQuery with $(element)
    addClass(element, 'onScreen');
});

osHorizontal.on('leave', '.horizontal .contained', function (element) {
    // You can use jQuery with $(element)
    removeClass(element, 'onScreen');
});
