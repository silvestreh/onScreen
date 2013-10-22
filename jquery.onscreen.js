/* 
 * onScreen.js
 * by Silvestre Herrera
 * 
 * Checks if matched elements are inside the viewport.
 */

(function($) {

  $.fn.onScreen = function(options) {
    

    params = $.extend({
      doIn: function(){
        console.log('on screen');
      },
      doOut: function(){
        console.log('off screen');
      },
      tolerance: 0
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
        
        // Element dimensions & position
        elHeight = $el.height();
        elWidth = $el.height();
        elTop = $el.offset().top;
        elLeft = $el.offset().left;
        
        // Update scroll position
        scrollPos = $win.scrollTop();
        
        if (verticalIn()) {
          $el.addClass('onScreen');
          params.doIn.call($el[0]);
          isOnScreen = true;
        } 
        else if (verticalOut()) {
          $el.removeClass('onScreen');
          params.doOut.call($el[0]);
          isOnScreen = false;
        }
      }
      
      $(window).on('scroll',checkPos).on('resize',checkPos).on('load',checkPos);
      
    });
    
  };
  
})(jQuery);
