const animations = require('../utils/animations');

jQuery(document).ready(($) => {

  function handleAllAnimations(el) {

    const scrollPos = animations.detScrollPos($, el, 900);

    if (scrollPos >= 0) {
      
      el.find('.hws-container--large > * ').each((index, el2) => {
  
        setTimeout(function() {
          animations.fadeInUp($, $(el2), 500)
        }, 500 + (250 * index))
  
      })

    }

  }

  $(window).on('load resize scroll', () => {

    //desktop
    $('.hws-wysiwyg--animate').each((index, element) => {
      handleAllAnimations($(element))
    });
    
  })


})