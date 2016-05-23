import OnScreen from 'onscreen';

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
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.js-destroy').addEventListener('click', destroy);
    document.querySelector('.js-attach').addEventListener('click', attach);
}, false);

// Container is window
var os = new OnScreen({
    tolerance: 50
});

os.on('enter', '.target', (element) => {
    // Using jQuery: $(element).addClass('onScreen');
    element.classList.add('onScreen');
});

os.on('leave', '.target', (element) => {
    // Using jQuery: $(element).removeClass('onScreen');
    element.classList.remove('onScreen');
});


// Container is element (vertical orientation)
var osVertical = new OnScreen({
    container: '.container .vertical',
    tolerance: 20
});

osVertical.on('enter', '.vertical .contained', (element) => {
    // You can use jQuery with $(element)
    element.classList.add('onScreen');
});

osVertical.on('leave', '.vertical .contained', (element) => {
    // You can use jQuery with $(element)
    element.classList.remove('onScreen');
});

// Container is element (horizontal orientation)
var osHorizontal = new OnScreen({
    container: '.container .horizontal',
    tolerance: 20
});

osHorizontal.on('enter', '.horizontal .contained', (element) => {
    // You can use jQuery with $(element)
    element.classList.add('onScreen');
});

osHorizontal.on('leave', '.horizontal .contained', (element) => {
    // You can use jQuery with $(element)
    element.classList.remove('onScreen');
});
