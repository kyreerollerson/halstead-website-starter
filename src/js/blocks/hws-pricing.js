const animations = require('../utils/animations');

jQuery(document).ready(($) => {

  function handleAllAnimations(el) {
    const scrollPos = animations.detScrollPos($, el, 900);

    if (scrollPos >= 0) {
      const heading = el.find('h2');
      animations.fadeInUp($, heading, 500);
    }

    const windowWidth = $(window).width();
    let totalNum = 1;

    if (windowWidth > 1199) {
      totalNum = 4;
    } else if (windowWidth >= 768 && windowWidth <= 1199) {
      totalNum = 3;
    } else if (windowWidth >= 578 && windowWidth <= 767) {
      totalNum = 2;
    }

    el.find('.hws-pricing__flex__single').each((index, el2) => {
      const scrollPos2 = animations.detScrollPos($, $(el2), 900);
      if (scrollPos2 >= 0) {
        animations.fadeInUp($, $(el2), 250, index, totalNum)
      }
    })

  }

  $(window).on('load resize scroll', () => {
    // desktop
    $('.hws-pricing').each((index, element) => {
      handleAllAnimations($(element));
    });
  })


})