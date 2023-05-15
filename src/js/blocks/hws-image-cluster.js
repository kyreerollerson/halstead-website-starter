const animations = require('../utils/animations');

jQuery(document).ready(($) => {

  function generateTimelines(el) {
    const id = $(el).attr('id');
    const outerHeight = $(el).outerHeight();
    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-image-cluster__image-1`,
      translateY: [0, `-${Math.floor(outerHeight * 0.144)}px`],
      duration: 1000,
    });
    timelines.push(timeline1);

    const timeline2 = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-image-cluster__image-2`,
      translateY: [0, `-${Math.floor(outerHeight * 0.216)}px`],
      duration: 1000,
    });
    timelines.push(timeline2);

    const timeline3 = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-image-cluster__image-3`,
      translateY: [0, `-${Math.floor(outerHeight * 0.388)}px`],
      duration: 1000,
    });
    timelines.push(timeline3);
    return timelines;
  }

  function generateTimelinesMobile(el) {
    const id = $(el).parents('.hws-image-cluster-mobile').attr('id');
    const index = parseInt($(el).attr('data-index'));
    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-image-cluster-mobile__image[data-index="${index}"]`,
      opacity: [0, 1],
      translateY: ['50px', 0],
      duration: 1000
    });
    timelines.push(timeline1);
    return timelines;
  }

  function handleAllAnimations(el, timelines) {
    const offsetTop = $(el).offset().top - 400,
      scrollPos = $(window).scrollTop() - offsetTop,
      maxScrollPos = $(el).outerHeight();
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

    el.find('.hws-image-cluster-mobile__image').each((index, el2) => {
      const scrollPos2 = animations.detScrollPos($, $(el2), 900);

      if (scrollPos2 > 0) {
        animations.fadeInUp($, $(el2), 500)
      }

    })

  }

  $(window).on('load resize scroll', () => {

    // desktop
    $('.hws-image-cluster').each((index, element) => {
      const timelines = generateTimelines(element);
      handleAllAnimations(element, timelines);
    });

    // mobile
    $('.hws-image-cluster-mobile').each((index, element) => {
      handleAllAnimationsMobile($(element))
    });

  })


})