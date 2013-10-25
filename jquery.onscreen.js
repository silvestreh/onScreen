/* 
 * onScreen.js
 * by Silvestre Herrera
 * 
 * Checks if matched elements are inside the viewport.
 */

(function($) {

  $.fn.onScreen = function(options) {

    var params = $.extend({
      direction: 'vertical',
      toggleClass: true,
      doIn: null,
      doOut: null,
      tolerance: 0,
      lazyAttr: null,
      lazyPlaceholder: 'data:image/gif;base64,R0lGODlhEAAFAIAAAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQAAACwAAAAAEAAFAAACCIyPqcvtD00BACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIQTGCiywKPmjxUNhjtMlWrAgAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFEiyUf6wCEBHvLPemIHdTzCMDegkACH5BAkJAAYALAAAAAAQAAUAgoSChLS2tIyKjLy+vIyOjMTCxP///wAAAAMUWCQ09jAaAiqQmFosdeXRUAkBCCUAIfkECQkACAAsAAAAABAABQCDvLq83N7c3Nrc9Pb0xMLE/P78vL68/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCEwkCnKGbegvQn4RjGMx8F1HxBi5Il4oEiap2DcVYlpZwQAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCDwnCGHEcIMxPn4VAGMQNBx0zQEZHkiYNiap5RaBKG9EQAh+QQJCQAJACwAAAAAEAAFAIOEgoTMysyMjozs6uyUlpSMiozMzsyUkpTs7uz///8AAAAAAAAAAAAAAAAAAAAAAAAEGTBJiYgoBM09DfhAwHEeKI4dGKLTIHzCwEUAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCAQSTmMEGaco8+UBSACwWBqHxKOJYd+q1iaXFoRRMbtEQAh+QQJCQAIACwAAAAAEAAFAIO8urzc3tzc2tz09vTEwsT8/vy8vrz8+vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAEIhBJWc6wJZAtJh3gcRBAaXiIZV2kiRbgNZbA6VXiUAhGL0QAIfkECQkABgAsAAAAABAABQCChIKEtLa0jIqMvL68jI6MxMLE////AAAAAxRoumxFgoxGCbiANos145e3DJcQJAAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFFi6XCQwtCmAHbPVm9kGWKcEQxkkACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIRlI8SAZsPYnuJMUCRnNksWwAAOw=='
    }, options);

    return this.each(function() {

      var isOnScreen = false; // Initialize boolean
      var scrollTop; // Initialize Scroll Position (probably not needed)
      var $el = $(this); // Matched element

      function verticalIn() {
        return elTop < winBottom - params.tolerance && scrollTop < (elTop + elHeight) - params.tolerance && !isOnScreen;
      }

      function verticalOut() {
        return elTop + elHeight < scrollTop && isOnScreen || elTop > winBottom && isOnScreen;
      }
      
      function horizontalIn() {
        return elLeft < winRight - params.tolerance && scrollLeft < (elLeft + elWidth) - params.tolerance && !isOnScreen;
      }
      
      function horizontalOut() {
        return elLeft + elWidth < scrollLeft && isOnScreen || elLeft > winRight && isOnScreen;
      }
      
      function directionIn() {
        if (params.direction == 'vertical') {
          return verticalIn();
        } else if (params.direction == 'horizontal') {
          return horizontalIn();
        }
      }
      
      function directionOut() {
        if (params.direction == 'vertical') {
          return verticalOut();
        } else if (params.direction == 'horizontal') {
          return horizontalOut();
        }
      }
      
      function checkPos() {
        // Viewport dimensions
        $win = $(window);
        winHeight = $win.height();
        winWidth = $win.width();
        winBottom = $win.scrollTop() + winHeight;
        winRight = $win.scrollLeft() + winWidth;
        
        // Element dimensions & position
        elHeight = $el.height();
        elWidth = $el.height();
        elTop = $el.offset().top;
        elLeft = $el.offset().left;
        
        // Update scroll position
        scrollTop = $win.scrollTop();
        scrollLeft = $win.scrollLeft();
        
        if (directionIn()) {
          if (params.toggleClass) {
            $el.addClass('onScreen');
          }
          if (typeof(params.doIn) == 'function') {
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
            $el.removeClass('onScreen');
          }
          if (typeof(params.doOut) == 'function') {
            params.doOut.call($el[0]);
          }
          isOnScreen = false;
        }

      }
      
      checkPos();
      
      $(window).on('scroll',checkPos).on('resize',checkPos).on('load',checkPos);
      
    });
    return this;
  };

})(jQuery);
