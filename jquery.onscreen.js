/* 
 * onScreen.js
 * by Silvestre Herrera
 * 
 * Checks if matched elements are inside the viewport.
 */

(function($) {

  $.fn.onScreen = function(options) {

    var params = $.extend({
      doIn: function(){
        console.log('on screen');
      },
      doOut: function(){
        console.log('off screen');
      },
      tolerance: 0,
      toggleClass: true
    }, options);

    return this.each(function() {

      var isOnScreen = false; // Initialize boolean
      var scrollPos; // Initialize Scroll Position (probably not needed)
      var $el = $(this); // Matched element

      function verticalIn() {
        return elTop < winBottom - params.tolerance && scrollPos < (elTop + elHeight) - params.tolerance && !isOnScreen;
      }

      function verticalOut() {
        return elTop + elHeight < scrollPos && isOnScreen || elTop > winBottom && isOnScreen;
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
        scrollPos = $win.scrollTop();
        
        if (verticalIn()) {
          if (params.toggleClass) {
            $el.addClass('onScreen');
          }
          if (typeof(params.doIn) == 'function') {
            params.doIn.call($el[0]);
          }
          isOnScreen = true;
        } 
        else if (verticalOut()) {
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
