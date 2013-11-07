/* 
 * onScreen.js
 * Checks if matched elements are inside the viewport.
 *
 * Copyright onScreen Contributors, 2013 Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * You can find a list of contributors at:
 * https://github.com/silvestreh/onScreen/graphs/contributors
 */

(function($) {

  $.fn.onScreen = function(options) {

    var params = $.extend({
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
    }, options);

    return this.each(function() {

      var isOnScreen = false; // Initialize boolean
      var scrollTop; // Initialize Vertical Scroll Position
      var scrollLeft; // Initialize Horizontal Scroll Position 
      var $el = $(this); // Matched element
      
      // Initialize Viewport dimensions
      var $container;
      var containerHeight;
      var containerWidth;
      var containerBottom;
      var containerRight;
      
      // Initialize element dimensions & position
      var elHeight;
      var elWidth;
      var elTop;
      var elLeft;

      function verticalIn() {
        if (params.container === window) {
          return elTop < containerBottom - params.tolerance && scrollTop < (elTop + elHeight) - params.tolerance && !isOnScreen;
        } else {
          return elTop < containerHeight - params.tolerance && elTop > (-elHeight) + params.tolerance && !isOnScreen;
        }
      }

      function verticalOut() {
        if (params.container === window) {
          return elTop + elHeight < scrollTop && isOnScreen || elTop > containerBottom && isOnScreen;
        } else {
          return elTop > containerHeight - params.tolerance && isOnScreen || -elHeight + params.tolerance > elTop && isOnScreen;
        }
      }
      
      function horizontalIn() {
        if (params.container === window) {
          return elLeft < containerRight - params.tolerance && scrollLeft < (elLeft + elWidth) - params.tolerance && !isOnScreen;
        } else {
          return elLeft < containerWidth - params.tolerance && elLeft > (-elWidth) + params.tolerance && !isOnScreen;
        }
      }
      
      function horizontalOut() {
        if (params.container === window) {
          return elLeft + elWidth < scrollLeft && isOnScreen || elLeft > containerRight && isOnScreen;
        } else {
          return elLeft > containerWidth - params.tolerance && isOnScreen || -elWidth + params.tolerance > elLeft && isOnScreen;
        }
      }
      
      function directionIn() {
        if (params.direction === 'vertical') {
          return verticalIn();
        } else if (params.direction === 'horizontal') {
          return horizontalIn();
        }
      }
      
      function directionOut() {
        if (params.direction === 'vertical') {
          return verticalOut();
        } else if (params.direction === 'horizontal') {
          return horizontalOut();
        }
      }

      function throttle(fn, timeout, ctx) {
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

      }
      
      function checkPos() {
        // Make container relative
        if (params.container !== window) {
          if ($(params.container).css('position') === 'static') {
            $(params.container).css('position', 'relative');
          }
        }
        
        // Update Viewport dimensions
        $container = $(params.container);
        containerHeight = $container.height();
        containerWidth = $container.width();
        containerBottom = $container.scrollTop() + containerHeight;
        containerRight = $container.scrollLeft() + containerWidth;
        
        // Update element dimensions & position
        elHeight = $el.outerHeight(true);
        elWidth = $el.outerWidth(true);

        if (params.container === window) {
          elTop = $el.offset().top;
          elLeft = $el.offset().left;
        } else {
          elTop = $el.position().top;
          elLeft = $el.position().left;
        }
        
        // Update scroll position
        scrollTop = $container.scrollTop();
        scrollLeft = $container.scrollLeft();

        // This will spam A LOT of messages in your console
        if (params.debug) {
          console.log(
            'Container: ' + params.container + '\n' +
            'Width: ' + containerHeight + '\n' +
            'Height: ' + containerWidth + '\n' +
            'Bottom: ' + containerBottom + '\n' +
            'Right: ' + containerRight
          );
          console.log(
            'Matched element: ' + (typeof $el.attr('class') !== 'undefined' ? $el.prop('tagName').toLowerCase() + '.' + $el.attr('class') : $el.prop('tagName').toLowerCase()) + '\n' +
            'Left: ' + elLeft + '\n' +
            'Top: ' + elTop + '\n' +
            'Width: ' + elWidth + '\n' +
            'Height: ' + elHeight
          );
        }
        
        if (directionIn()) {
          if (params.toggleClass) {
            $el.addClass(params.toggleClass);
          }
          if (typeof params.doIn === 'function') {
            params.doIn.call($el[0]);
          }
          if (params.lazyAttr && $el.prop('tagName') === 'IMG') {
            lazyImg = $el.attr(params.lazyAttr);
            $el.css({
             'background': 'url(' + params.lazyPlaceholder + ') center center no-repeat',
             'min-height': '5px',
             'min-width': '16px'
            });
            $el.prop('src',lazyImg);
          }
          isOnScreen = true;
        } 
        else if (directionOut()) {
          if (params.toggleClass) {
            $el.removeClass(params.toggleClass);
          }
          if (typeof params.doOut === 'function') {
            params.doOut.call($el[0]);
          }
          isOnScreen = false;
        }
        
      }
      
      if (window.location.hash) {
        throttle(checkPos, 50);
      } else {
        checkPos();
      }

      checkPos = (params.throttle) ? throttle(checkPos, params.throttle) : checkPos;

      // Attach checkPos
      $(params.container).on('scroll', checkPos ).on('resize',checkPos);

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
      
    });
  };

})(jQuery);