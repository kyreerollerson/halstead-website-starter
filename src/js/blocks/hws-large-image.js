const animations = require('../utils/animations');

jQuery(document).ready(($) => {

  function generateTimelines(el) {
    const id = $(el).attr('id');
    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-large-image__inner`,
      borderWidth: ['70px', '0px'],
      padding: ['20px', '90px'],
      duration: 1000
    });
    timelines.push(timeline1);
    return timelines;
  }

  function handleAllAnimations(el, timelines) {
    const offsetTop = $(el).offset().top,
      scrollPos = $(window).scrollTop() - offsetTop,
      maxScrollPos = $(el).outerHeight() -  $(el).find(`.hws-large-image__sticky`).outerHeight();
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

  function handleAllStaticAnimations(el) {
    const scrollPos = animations.detScrollPos($, el, 700);

    if (scrollPos >= 0) {
      animations.fadeIn($, el, 500)
      const bg = el.find('.hws-large-image__inner__image');
      animations.backgroundShrink($, bg, 500)
    }

  }

  function handleAllStaticAnimationsMobile(el) {
    const scrollPos = animations.detScrollPos($, el, 700);

    if (scrollPos >= 0) {
      animations.fadeIn($, el, 500)
      const bg = el.find('.hws-large-image-mobile__inner__image');
      animations.backgroundShrink($, bg, 500)
    }

  }

  $(window).on('load resize scroll', () => {
    // desktop
    $('.hws-large-image').each((index, element) => {
      const timelines = generateTimelines(element);
      handleAllAnimations(element, timelines);
      handleAllStaticAnimations($(element));
    });
    // mobile
    $('.hws-large-image-mobile').each((index, element) => {
      handleAllStaticAnimationsMobile($(element));
    });
  })

})