/** 
 * onScreen.js v0.2.0
 * Checks if matched elements are inside the viewport.
 *
 * Copyright onScreen Contributors, 2013 Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * You can find a list of contributors at:
 * https://github.com/silvestreh/onScreen/graphs/contributors
 */

;(function ($, window, document, undefined) {

  var pluginName = 'onScreen',
      version = 'v0.2.0'
      defaults = {
        container: window,
        direction: 'vertical',
        toggleClass: null,
        doIn: null,
        doOut: null,
        tolerance: 0,
        throttle: null,
        lazyAttr: null,
        lazyPlaceholder: 'data:image/gif;base64,R0lGODlhEAAFAIAAAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQAAACwAAAAAEAAFAAACCIyPqcvtD00BACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIQTGCiywKPmjxUNhjtMlWrAgAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFEiyUf6wCEBHvLPemIHdTzCMDegkACH5BAkJAAYALAAAAAAQAAUAgoSChLS2tIyKjLy+vIyOjMTCxP///wAAAAMUWCQ09jAaAiqQmFosdeXRUAkBCCUAIfkECQkACAAsAAAAABAABQCDvLq83N7c3Nrc9Pb0xMLE/P78vL68/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCEwkCnKGbegvQn4RjGMx8F1HxBi5Il4oEiap2DcVYlpZwQAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCDwnCGHEcIMxPn4VAGMQNBx0zQEZHkiYNiap5RaBKG9EQAh+QQJCQAJACwAAAAAEAAFAIOEgoTMysyMjozs6uyUlpSMiozMzsyUkpTs7uz///8AAAAAAAAAAAAAAAAAAAAAAAAEGTBJiYgoBM09DfhAwHEeKI4dGKLTIHzCwEUAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCAQSTmMEGaco8+UBSACwWBqHxKOJYd+q1iaXFoRRMbtEQAh+QQJCQAIACwAAAAAEAAFAIO8urzc3tzc2tz09vTEwsT8/vy8vrz8+vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAEIhBJWc6wJZAtJh3gcRBAaXiIZV2kiRbgNZbA6VXiUAhGL0QAIfkECQkABgAsAAAAABAABQCChIKEtLa0jIqMvL68jI6MxMLE////AAAAAxRoumxFgoxGCbiANos145e3DJcQJAAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFFi6XCQwtCmAHbPVm9kGWKcEQxkkACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIRlI8SAZsPYnuJMUCRnNksWwAAOw==',
        debug: false
      },
      throttle = function throttle(fn, timeout, ctx) {
        var timer, args, needInvoke;
        return function() {
          args = arguments;
          needInvoke = true;
          ctx = ctx || this;
          if(!timer) {
            (function() {
              if(needInvoke) {
                fn.apply(ctx, args);
                needInvoke = false;
                timer = setTimeout(arguments.callee, timeout);
              }
              else {
                timer = null;
              }
            })();
          }
        };
      },
      OnScreen;

  /**
   * OnScreen class
   * @param {DOM} element
   * @param {Object} options
   */
  OnScreen = function OnScreen(element, options) {
    var self = this;

    self.element = element;

    self.options = $.extend({}, defaults, options);


    self._defaults = defaults;
    self._name = pluginName;

    self.init();
  };

  OnScreen.prototype = /** @lends OnScreen */{

    init: function init() {
      var self = this,
          options = self.options;

      self._setInitialVariables();

      if (window.location.hash) {
        throttle(self.checkPos, 50);
      } else {
        self.checkPos();
      }

      if (options.throttle) {
        self.checkPos = throttle(self.checkPos, options.throttle);
      }
    },

    _setInitialVariables: function _setInitialVariables() {
      var self = this,
          options = self.options;

      self.eventNamespace = self._name + (new Date()).getTime();
      self.$element = $(self.element);
      self.$container = $(options.container);

      self.containerIsWindow = $.isWindow(options.container);
      self.isOnScreen = false;
      self.scrollTop = null;
      self.scrollLeft = null;

      self.containerPosition = {
        height: null,
        width: null,
        bottom: null,
        right: null
      };

      self.elPosition = {
        height: null,
        width: null,
        top: null,
        left: null
      };
    },

    _setEvents: function _setEvents() {
      var self = this,
          eventNamespace = self.eventNamespace;

      self.$container
        .on(
          'scroll.' + eventNamespace + ' resize.onScreen' + eventNamespace,
          self.checkPos
        );


      // Since <div>s don't have a resize event, we have
      // to attach checkPos to the window object as well
      if (!self.containerIsWindow) {
        $(window).on('resize.' + eventNamespace, self.checkPos);
      }
    },

    verticalIn: function verticalIn() {
      var self = this,
          tolerance = self.options.tolerance,
          containerPosition = self.containerPosition,
          containerBottom = containerPosition.bottom,
          containerHeight = containerPosition.height,
          elPosition = self.elPosition,
          elTop = elPosition.top,
          elHeight = elPosition.height;

      if (self.containerIsWindow) {
        return elTop < containerBottom - tolerance &&
               self.scrollTop < (elTop + elHeight) - tolerance;
      } else {
        return elTop < containerHeight - tolerance &&
               elTop > (-elHeight) + tolerance;
      }
    },

    verticalOut: function verticalOut() {
      var self = this,
          tolerance = self.options.tolerance,
          containerPosition = self.containerPosition,
          containerBottom = containerPosition.bottom,
          containerHeight = containerPosition.height,
          elPosition = self.elPosition,
          elTop = elPosition.top,
          elHeight = elPosition.height;

      if (self.containerIsWindow) {
        return elTop + (elHeight - tolerance) < self.scrollTop ||
               elTop > containerBottom - tolerance;
      } else {
        return elTop > containerHeight - tolerance ||
               -elHeight + tolerance > elTop;
      }
    },

    horizontalIn: function horizontalIn() {
      var self = this,
          tolerance = self.options.tolerance,
          containerPosition = self.containerPosition,
          containerRight = containerPosition.right,
          containerWidth = containerPosition.width,
          elPosition = self.elPosition,
          elLeft = elPosition.left,
          elWidth = elPosition.width;

      if (self.containerIsWindow) {
        return elLeft < containerRight - tolerance &&
               scrollLeft < (elLeft + elWidth) - tolerance;
      } else {
        return elLeft < containerWidth - tolerance &&
               elLeft > (-elWidth) + tolerance;
      }
    },
    
    horizontalOut: function horizontalOut() {
      var self = this,
          tolerance = self.options.tolerance,
          containerPosition = self.containerPosition,
          containerRight = containerPosition.right,
          containerWidth = containerPosition.width,
          elPosition = self.elPosition,
          elLeft = elPosition.left,
          elWidth = elPosition.width;

      if (self.containerIsWindow) {
        return elLeft + (elWidth - tolerance) < self.scrollLeft ||
               elLeft > containerRight - tolerance;
      } else {
        return elLeft > containerWidth - tolerance ||
               -elWidth + tolerance > elLeft;
      }
    },

    directionIn: function directionIn() {
      var self = this;

      if (self.isOnScreen) {
        return false;
      }
      
      if (self.options.direction === 'horizontal') {
        return self.horizontalIn();
      } else {
        return self.verticalIn();
      }
    },
    
    directionOut: function directionOut() {
      var self = this;

      if (!self.isOnScreen) {
        return false;
      }
      
      if (self.options.direction === 'horizontal') {
        return self.horizontalOut();
      } else {
        return self.verticalOut();
      }
    },

    checkPos: function checkPos() {
      var self = this,
          options = self.options,
          $element = self.$element;

      // Make container relative
      if (!self.containerIsWindow && self.$container.css('position') === 'static') {
        self.$container.css('position', 'relative');
      }

      self._updateContainerDimensions();

      self._updateElementDimensions();

      self._debug();

      if (self.directionIn()) {
        if (options.toggleClass) {
          $element.addClass(options.toggleClass);
        }

        if ($.isFunction(options.doIn)) {
          options.doIn.call($element[0]);
        }

        if (options.lazyAttr && $element.prop('tagName') === 'IMG') {
          var lazyImg = $element.attr(options.lazyAttr);
          $element.css({
            background: 'url(' + options.lazyPlaceholder + ') 50% 50% no-repeat',
            minHeight: '5px',
            minWidth: '16px'
          });

          $element.prop('src',lazyImg);
        }

        self.isOnScreen = true;
      }
      else if (self.directionOut()) {
        if (options.toggleClass) {
          $element.removeClass(options.toggleClass);
        }

        if ($.isFunction(options.doOut)) {
          options.doOut.call($element[0]);
        }
        
        self.isOnScreen = false;
      }
    },

    _debug: function _debug() {
      var self = this,
          options = self.options;

      // This will spam A LOT of messages in your console
      if (options.debug) {
        console.log(
          'Container: ' + options.container + '\n' +
          'Width: ' + self.containerPosition.width + '\n' +
          'Height: ' + self.containerPosition.height + '\n' +
          'Bottom: ' + self.containerPosition.bottom + '\n' +
          'Right: ' + self.containerPosition.right
        );
        console.log(
          'Matched element: ' + (self.$element.attr('class') !== undefined ? self.$element.prop('tagName').toLowerCase() + '.' + self.$element.attr('class') : self.$element.prop('tagName').toLowerCase()) + '\n' +
          'Left: ' + self.elPosition.left + '\n' +
          'Top: ' + self.elPosition.top + '\n' +
          'Width: ' + self.elPosition.width + '\n' +
          'Height: ' + self.elPosition.height
        );
      }
    },

    _updateContainerDimensions: function _updateContainerDimensions() {
      var self = this,
          $container = self.$container;

      self.containerPosition = {          
        height: $container.height(),
        width: $container.width(),
        bottom: $container.scrollTop() + $container.height(),
        right: $container.scrollLeft() + $container.width()
      };

      // Update scroll position
      self.scrollTop = $container.scrollTop();
      self.scrollLeft = $container.scrollLeft();
    },

    _updateElementDimensions: function _updateContainerDimensions() {
      var self = this,
          $element = self.$element,
          offSetPosition;

      if (self.containerIsWindow) {
        offSetPosition = $element.offset();
      } else {
        offSetPosition = $el.position();
      }

      self.elPosition = {
        height: $element.outerHeight(true),
        width: $element.outerWidth(true),
        top: offSetPosition.top,
        left: offSetPosition.left
      };
    },

    /**
     * Method to clean up onScreen
     * @return {OnScreen}
     */
    destroy: function destroy() {
      var self = this,
          eventNamespace = self.eventNamespace;

      self.$container
        .off(
          'scroll.' + eventNamespace + ' resize.onScreen' + eventNamespace
        );

      $(window).off('resize.' + eventNamespace);

      self.$container = null;
      self.$element = null;
    }
  };

  $.fn[pluginName] = function(options) {
    // get the arguments 
    var args = $.makeArray(arguments),
        after = args.slice(1);

    return this.each(function() {
      var element = this;

      var instance = $.data(element, pluginName);
      if (instance) {
        // call a method on the instance
        if (typeof options == 'string') {
          instance[options].apply(instance, after);
        }
      } else {
        // create the plugin
        $.data(
          element,
          pluginName,
          new OnScreen(element, options)
        );
      }
    });
  };

  // Module support
  if (typeof module === 'object' && module && typeof module.exports === 'object') {
    // Node.js module pattern
    module.exports = jQuery;
  } else {
    // AMD
    if (typeof define === 'function' && define.amd) {
      define('jquery-onscreen', [], function() { return jQuery; });
    }
  }

})( jQuery, window, document );
