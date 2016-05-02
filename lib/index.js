// Methods
import attach from './methods/attach';
import _debouncedScroll from './methods/debouncedScroll';
import destroy from './methods/destroy';
import off from './methods/off';
import on from './methods/on';

// Helpers
import observeDOM from './helpers/observeDOM';

/**
 * Detects wether DOM nodes enter or leave the viewport
 *
 * @constructor
 * @param {object} options The configuration object
 */
function OnScreen(options = { tolerance: 0, debounce: 100, container: window }) {
    this.options = options;
    this.trackedElements = {};

    if (!this.options.tolerance) {
        this.options.tolerance = 0;
    }
    if (!this.options.debounce) {
        this.options.debounce = 100;
    }
    if (!this.options.container) {
        this.options.container = window;
    }

    observeDOM(document.querySelector('body'), () => {
        Object.keys(this.trackedElements).forEach((element) => {
            this.on('enter', element);
            this.on('leave', element);
        });
    });

    this._scroll = this._debouncedScroll.call(this);
    this.attach();
}

OnScreen.prototype = {
    attach,
    _debouncedScroll,
    destroy,
    off,
    on
};

export default OnScreen;
