(function($) {

    $(window).scroll(function(){
      /* -------------------
         Header Animation
      ---------------------*/
        if ($(this).scrollTop() > 5){  
            $('nav').addClass("navbar-small")
        } else{
            $('nav').removeClass("navbar-small")
        }
    });
    /* -------------------
    Animation.css calling
    ---------------------*/
    new WOW().init(); 

    /* -------------
    Effect hover nav
    ----------------*/
    $(".nav-link").hover(function(){
        $(this).toggleClass('active');
      });
})(jQuery);

/* -------------------
Tools Cubebox
 ---------------------*/
(function($, window, document, undefined) {
    "use strict";
  
    var gridContainer = $('#grid-container-fullwidth'),
        filtersContainer = $('#filters-container-fullwidth'),
        wrap, filtersCallback;

    gridContainer.cubeportfolio({
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 20,
        gapVertical: 20,
        gridAdjustment: 'responsive',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,
        caption: 'fadeIn'
    });

    filtersContainer.on('click.cbp', '.cbp-filter-item', function() {
        // get cubeportfolio data and check if is still animating (reposition) the items.
        if (!$.data(gridContainer[0], 'cubeportfolio').isAnimating) {
            $(this).addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
        }
        // filter the items
        gridContainer.cubeportfolio('filter', $(this).data('filter'), function() {});
    });
    
    /* activate counter for filters */
    gridContainer.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'), function() {
        // read from url and change filter active
        var match = /#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href), 
            item;
        if (match !== null) {
            item = filtersContainer.find('.cbp-filter-item').filter('[data-filter="' + match[1] + '"]');
            if (item.length) {
                filtersCallback.call(null, item);
            }
        }
    });
})(jQuery, window, document);

/* -------------------
Smooth Page Scrolling
 ---------------------*/
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
            location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    // $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
                });
            }
        }
    });   

