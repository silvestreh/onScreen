// Methods
import attach from './methods/attach';
import debounceCallback from './methods/debounce';
import destroy from './methods/destroy';
import off from './methods/off';
import on from './methods/on';

// Helpers
import observeDOM from './helpers/observe-dom';
import onScreen from './helpers/on-screen';
import eventHandler from './helpers/event-handler';

/**
 * Detects wether DOM nodes enter or leave the viewport
 *
 * @constructor
 * @param {object} options The configuration object
 */
function OnScreen(options = { tolerance: 0, debounce: 100, container: window }) {
    this.options = {};
    this.trackedElements = {};

    Object.defineProperties(this.options, {
        container: {
            configurable: false,
            enumerable: false,
            get() {
                let container;

                if (typeof options.container === 'string') {
                    container = document.querySelector(options.container);
                } else if (options.container instanceof HTMLElement) {
                    container = options.container;
                }

                return container || window;
            },
            set(value) {
                options.container = value;
            }
        },
        debounce: {
            get() {
                return parseInt(options.debounce, 10) || 100;
            },
            set(value) {
                options.debounce = value;
            }
        },
        tolerance: {
            get() {
                return parseInt(options.tolerance, 10) || 0;
            },
            set(value) {
                options.tolerance = value;
            }
        }
    });

    Object.defineProperty(this, '_scroll', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: debounceCallback(() => {
            eventHandler(this.trackedElements, this.options);
        }, this.options.debounce)
    });

    observeDOM(document.body, () => {
        eventHandler(this.trackedElements, this.options);
    });

    this.attach();
}

Object.defineProperties(OnScreen.prototype, {
    attach: {
        configurable: false,
        writable: false,
        enumerable: false,
        value: attach
    },
    destroy: {
        configurable: false,
        writable: false,
        enumerable: false,
        value: destroy
    },
    off: {
        configurable: false,
        writable: false,
        enumerable: false,
        value: off
    },
    on: {
        configurable: false,
        writable: false,
        enumerable: false,
        value: on
    }
});

OnScreen.check = onScreen;

export default OnScreen;
