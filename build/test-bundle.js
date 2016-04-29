'use strict';

var chai = require('chai');

require("source-map-support").install();

var babelHelpers = {};
babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

babelHelpers.classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

babelHelpers.createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

babelHelpers;

/**
 * Checks an element's position in respect to the viewport
 * and determines wether it's inside the viewport.
 *
 * @param {node} element The DOM node you want to check
 */
function insideViewport(el) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? { tolerance: 0 } : arguments[1];

    var rect = el.getBoundingClientRect();

    return rect.bottom - options.tolerance > 0 && rect.right - options.tolerance > 0 && rect.left + options.tolerance < (window.innerWidth || document.documentElement.clientWidth) && rect.top + options.tolerance < (window.innerHeight || document.documentElement.clientHeight);
}

function eventHandler(trackedElements, options) {
    var selectors = Object.keys(trackedElements);

    if (!selectors.length) return;

    selectors.forEach(function (selector) {
        trackedElements[selector].nodes.forEach(function (item) {
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

var observeDOM = function observeDOM() {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var eventListenerSupported = window.addEventListener;

    return function observer(obj, callback) {
        if (MutationObserver) {
            // define a new observer
            var obs = new MutationObserver(function (mutations) {
                if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) callback();
            });
            // have the observer observe foo for changes in children
            obs.observe(obj, {
                childList: true,
                subtree: true
            });
        } else if (eventListenerSupported) {
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    };
}();

var OnScreen = function () {
    function OnScreen() {
        var _this = this;

        var options = arguments.length <= 0 || arguments[0] === undefined ? { tolerance: 0, debounce: 100 } : arguments[0];
        babelHelpers.classCallCheck(this, OnScreen);

        this.options = options;
        this.trackedElements = {};
        this.attached = false;

        if (!this.options.tolerance) {
            this.options.tolerance = 0;
        }

        if (!this.options.debounce) {
            this.options.debounce = 100;
        }

        this.scroll = this.debouncedScroll.call(this);
        this.attach();

        // Observe DOM changes and start tracking newly added nodes
        observeDOM(document.querySelector('body'), function () {
            Object.keys(_this.trackedElements).forEach(function (element) {
                _this.on('enter', element);
                _this.on('leave', element);
            });
        });
    }

    /**
     * Debounces the scroll event to avoid performance issues
     *
     * @return {void}
     */


    babelHelpers.createClass(OnScreen, [{
        key: 'debouncedScroll',
        value: function debouncedScroll() {
            var _this2 = this;

            var timeout;

            return function () {
                clearTimeout(timeout);

                timeout = setTimeout(function () {
                    eventHandler(_this2.trackedElements, _this2.options);
                }, _this2.options.throttle);
            };
        }

        /**
         * Attaches the scroll event handler
         *
         * @return {void}
         */

    }, {
        key: 'attach',
        value: function attach() {
            window.addEventListener('scroll', this.scroll);
            window.addEventListener('resize', this.scroll);
            this.attached = true;
        }

        /**
         * Removes the scroll event handler
         *
         * @return {void}
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            window.removeEventListener('scroll', this.scroll);
            window.removeEventListener('resize', this.scroll);
            this.attached = false;
        }

        /**
         * Starts tracking elements matching a CSS selector
         *
         * @param {string} event The event you want to track (enter or leave)
         * @param {string} selector The element you want to track
         * @param {function} callback The callback function to handle the event
         * @return {void}
         */

    }, {
        key: 'on',
        value: function on(event, selector, callback) {
            var _this3 = this;

            var allowed = ['enter', 'leave'];

            if (!event) throw new Error('No event given. Choose either enter or leave');
            if (!selector) throw new Error('No selector to track');
            if (allowed.indexOf(event) < 0) throw new Error(event + ' event is not supported');

            if (!this.trackedElements.hasOwnProperty(selector)) {
                this.trackedElements[selector] = {};
            }

            this.trackedElements[selector].nodes = [];

            Array.from(document.querySelectorAll(selector)).forEach(function (node) {
                var item = {
                    isVisible: false,
                    wasVisible: false,
                    node: node
                };

                _this3.trackedElements[selector].nodes.push(item);
            });

            if (typeof this.trackedElements[selector][event] === 'function' && typeof callback === 'function') {
                console.warn(selector + '\'s ' + event + ' callback was overridden');
            }

            if (typeof callback === 'function') {
                this.trackedElements[selector][event] = callback;
            }
        }

        /**
         * Stops tracking elements matching a CSS selector
         *
         * @param {string} event The event you want to stop tracking (enter or leave)
         * @param {string} selector The CSS selector you want to stop tracking
         * @return {void}
         */

    }, {
        key: 'off',
        value: function off(event, selector) {
            if (this.trackedElements.hasOwnProperty(selector)) {
                if (this.trackedElements[selector][event]) {
                    delete this.trackedElements[selector][event];
                } else {
                    console.warn(selector + ' had no ' + event + ' callback defined');
                }
            }
        }
    }]);
    return OnScreen;
}();

describe('Instantiation', function () {
    it('should create an instance with default settings', function () {
        var instance = new OnScreen();

        chai.expect(instance.options.tolerance).to.equal(0);
        chai.expect(instance.options.debounce).to.equal(100);
    });

    it('should create an instance with custom settings', function () {
        var instance = new OnScreen({
            tolerance: 50,
            debounce: 50
        });

        chai.expect(instance.options.tolerance).to.equal(50);
        chai.expect(instance.options.debounce).to.equal(50);
    });
});

describe('Tracking', function () {
    var instance = void 0;

    beforeEach(function (done) {
        instance = new OnScreen();
        done();
    });

    it('should provide an enter callback', function () {
        instance.on('enter', '.target', function () {});

        chai.expect(babelHelpers.typeof(instance.trackedElements['.target'].enter)).to.equal('function');
    });

    it('should provide an leave callback', function () {
        instance.on('leave', '.target', function () {});

        chai.expect(babelHelpers.typeof(instance.trackedElements['.target'].leave)).to.equal('function');
    });

    it('should have found DOM nodes to work with', function () {
        instance.on('enter', '.target', function () {});

        chai.expect(instance.trackedElements['.target']).to.have.property('nodes').with.length(2);
    });

    it('should track newly added DOM elements', function () {
        var div = document.createElement('div');

        div.classList.add('target');
        instance.on('enter', '.target', function () {});

        chai.expect(instance.trackedElements['.target']).to.have.property('nodes').with.length(2);

        document.querySelector('body').appendChild(div);
        chai.expect(instance.trackedElements['.target']).to.have.property('nodes').with.length(3);
    });
});

describe('Scroll binding', function () {
    var instance = void 0;

    beforeEach(function (done) {
        instance = new OnScreen();
        done();
    });

    it('should add a scroll event listener', function () {
        chai.expect(instance.attached).to.equal(true);
    });

    it('should be able to remove the event listener', function () {
        instance.destroy();
        chai.expect(instance.attached).to.equal(false);
    });
});
//# sourceMappingURL=test-bundle.js.map