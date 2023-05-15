const animations = require('../utils/animations');

jQuery(document).ready(($) => {

  // generate timelines
  function generateTimelines(element) {
    const id = $(element).attr('id');
    let timelines = [];
    const numSlides = $(element).find('.hws-services-slider__carousel__single').length;
    const totalDuration = 1000 * numSlides;
    const animationDuration = 300;

    $('.hws-services-slider__carousel__single').each((index, element) => {
      if (index == 0)
        return;
      // individual timeline
      const initDelay = index * 1000;
      const remainder = totalDuration - initDelay - 300;
      const timeline = anime.timeline({
        easing: 'easeInOutSine',
        duration: totalDuration,
        autoplay: false
      })
      // starter
      .add({
        targets: `#${id} [data-index="${index}"]`,
        translate: [1, 1],
        duration: initDelay,
      })
      // transitions
      .add({
        targets: `#${id} [data-index="${index}"]`,
        scale: [0.9, 1],
        opacity: [0.5, 1],
        duration: 300
      })
      // ender
      .add({
        targets: `#${id} [data-index="${index}"]`,
        translate: [1, 1],
        duration: remainder
      })
      timelines.push(timeline);
    });

    return timelines;
  
  }

  function generateTimelinesHeading(el) {
    const id = $(el).attr('id');
    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-services-slider__heading`,
      opacity: [0, 1],
      translateY: ['50px', 0],
      duration: 1000
    });
    timelines.push(timeline1);

    const timeline2 = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-services-slider__carousel`,
      opacity: [0, 1],
      duration: 1000
    });
    timelines.push(timeline2);

    return timelines;
  }


  // translate
  function handleAllAnimations(el, timelines) {
    const slideWidth = $(el).find('.hws-services-slider__carousel__single').outerWidth();
    const contentWidth = $(el).find('.hws-services-slider__carousel')[0].scrollWidth;
    $(el).css('height', contentWidth + 'px');
    const numSlides = $(el).find('.hws-services-slider__carousel__single').length;
    const maxPos = -1 * ((slideWidth * (numSlides)) - slideWidth + 198)
    const offsetTop = $(el).offset().top;
    const bodyScrollTop = $(window).scrollTop();
    const elemHeight = $(el).outerHeight();
    const stickyHeight = $(el).find('.hws-services-slider__sticky').outerHeight();
    const adminBarHeight = $('#wpadminbar').length ? $('#wpadminbar').outerHeight() : 0;
    const headerHeight = $('#hws-header').outerHeight();
    const headerOffset = adminBarHeight + headerHeight;
    const maxScrollTop = elemHeight - stickyHeight - headerOffset;
    const scrollTop = bodyScrollTop - offsetTop;
    const progressPoint = scrollTop/maxScrollTop;

    // animations
    if (progressPoint <= 0) {
      $(el).find('.hws-services-slider__carousel').css('transform', 'translateX(0px)');
      timelines.forEach((timeline, index) => {
        timeline.seek(0);
      })
    } else if (progressPoint >= 0 && progressPoint <= 1) {
      $(el).find('.hws-services-slider__carousel').css('transform', `translateX(${maxPos * progressPoint}px)`);
      timelines.forEach((timeline, index) => {
        timeline.seek(timeline.duration * progressPoint);
      })
    } else if (progressPoint > 1) {
      $(el).find('.hws-services-slider__carousel').css('transform', `translateX(${maxPos}px)`);
      timelines.forEach((timeline, index) => {
        timeline.seek(timeline.duration);
      })
    }
  }

  function handleAllAnimationsHeading(el, timelines) {
    const offsetTop = $(el).offset().top - 600,
      scrollPos = $(window).scrollTop() - offsetTop,
      maxScrollPos = 240;
      progressPoint = scrollPos/maxScrollPos;

    if (progressPoint < 0) {
      timelines.forEach((timeline, index) => {
        timeline.seek(0);
      });
    }
    if (progressPoint >= 0 && progressPoint <= 1) {
      timelines.forEach((timeline, index) => {
        timeline.seek(timeline.duration * progressPoint);
      });
    }
    if (progressPoint > 1) {
      timelines.forEach((timeline, index) => {
        timeline.seek(timeline.duration);
      });
    }
  }

  function handleAllAnimationsMobile(el) {
    const scrollPos = animations.detScrollPos($, el, 900);

    if (scrollPos >= 0) {
      animations.fadeIn($, el, 500)
    }

    el.find('.hws-services-slider-mobile__heading, .hws-services-slider-mobile__single').each((index, el2) => {
      const scrollPos2 = animations.detScrollPos($, $(el2), 900);

      if (scrollPos2 > 0) {
        animations.fadeInUp($, $(el2), 500)
      }

    })

  }
  
  $(window).on('load resize scroll', () => {
    // desktop
    $('.hws-services-slider').each((index, element) => {
      const timelines = generateTimelines(element);
      handleAllAnimations(element, timelines);
      const timelines2 = generateTimelinesHeading(element);
      handleAllAnimationsHeading(element, timelines2);
    })
    // mobile
    $('.hws-services-slider-mobile').each((index, element) => {
      handleAllAnimationsMobile($(element))
    });
  })

});

