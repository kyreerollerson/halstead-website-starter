const animations = require('../utils/animations');

jQuery(document).ready(($) => {
  
  let slider = $('.hws-blockquote-slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    // arrows: false,
    infinite: true,
    useTransform: true
    // autoplaySpeed: 2000,
  })
  
  slider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
    let nextIndex = currentSlide + 1; // assume moving right
    if(currentSlide-1 == nextSlide || (nextSlide+1 == slick.slideCount && currentSlide < nextSlide)) {
        nextIndex = currentSlide - 1; // nope, moving left
    }
    $(`[data-slick-index="${nextIndex}"]`).addClass('slick-target');
  })
  
  slider.on('afterChange', () => {
    $('.slick-slide').removeClass('slick-target');
  });

  function handleAllAnimations(el) {
    const scrollPos = animations.detScrollPos($, el, 700);

    if (scrollPos >= 0) {
      animations.fadeIn($, el, 500)
    }

  }

  $(window).on('load resize scroll', () => {
    
    $('.hws-blockquote-slider').each((index, element) => {
      handleAllAnimations($(element))
    });

  })


});

