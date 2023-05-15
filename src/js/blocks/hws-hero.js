const animations = require('../utils/animations');

jQuery(document).ready(($) => {


  function handleAllAnimations(el) {
    const scrollPos = animations.detScrollPos($, el, 400);

    if (scrollPos >= 0) {

      const overlay = el.find('.hws-hero__overlay');
      animations.fadeInOverlay($, overlay, 500);

      const bg = el.find('.hws-hero__background');
      animations.backgroundShrink($, bg, 500)
      
      el.find('.hws--vertical-center > * ').each((index, el2) => {
  
        setTimeout(function() {
          animations.fadeInUp($, $(el2), 500)
        }, 500 + (250 * index))
  
      })

    }

  }

  //desktop
  $('.hws-hero').each((index, element) => {
    handleAllAnimations($(element))
  });


  $(window).on('load resize scroll', () => {
    
    //desktop
    $('.hws-hero').each((index, element) => {
      handleAllAnimations($(element))
    });

  })


})