const animations = require('../utils/animations');

jQuery(document).ready(($) => {
  
  let slider = $('.hws-staff-slider__slides').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    infinite: true,
    useTransform: true
  })

  function handleAllAnimations(el) {
    const scrollPos = animations.detScrollPos($, el, 700);

    if (scrollPos >= 0) {
      animations.fadeIn($, el, 500)
    }

  }

  function handleAllAnimationsMobile(el) {

    el.find('.hws-staff-slider-mobile__title, .hws-staff-slider-mobile__single').each((index, el2) => {
      const scrollPos = animations.detScrollPos($, $(el2), 900);

      if (scrollPos >= 0) {
        animations.fadeInUp($, $(el2), 250)
      }

    })
  }

  $(window).on('load resize scroll', () => {
    // desktop
    $('.hws-staff-slider').each((index, element) => {
      const titleHeight = $('.hws-staff-slider__title-container__title').outerHeight();
      $('.hws-staff-slider__slide__content').css('padding-top', `${24 + titleHeight}px`);
      handleAllAnimations($(element));
    })
    // mobile
    $('.hws-staff-slider-mobile').each((index, element) => {
      handleAllAnimationsMobile($(element))
    });
  })

});

