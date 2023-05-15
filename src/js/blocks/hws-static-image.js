const animations = require('../utils/animations');

jQuery(document).ready(($) => {

  function handleAllAnimations(el) {
    const scrollPos = animations.detScrollPos($, el, 900);

    if (scrollPos >= 0) {
      animations.fadeInUp($, el, 500);
    }
    
  }

  $(window).on('load resize scroll', () => {
    // desktop
    $('.hws-static-image').each((index, element) => {
      handleAllAnimations($(element));
    });
  })


})