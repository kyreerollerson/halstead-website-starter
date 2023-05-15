const animations = require('../utils/animations');

jQuery(document).ready(($) => {

  function generateTimelinesHeading(el) {
    const id = $(el).attr('id');
    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-next-steps__heading`,
      opacity: [0, 1],
      translateY: ['50px', 0],
      duration: 1000
    });
    timelines.push(timeline1);
    return timelines;
  }

  function performFadeIn(el) {
    const id = $(el).parents('.hws-next-steps').attr('id');
    const index = parseInt($(el).attr('data-index'));
    anime({
      targets: `#${id} .hws-next-steps__flex__single[data-index="${index}"]`,
      easing: 'easeInOutSine',
      duration: 500 + ((index % 3) * 250),
      opacity: [0, 1],
      translateY: ['50px', 0],
      delay: (index % 3) * 250,
      autoplay: true
    });
  }

  function generateTimelinesHeadingMobile(el) {
    const id = $(el).attr('id');
    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-next-steps-mobile__heading`,
      opacity: [0, 1],
      translateY: ['50px', 0],
      duration: 1000
    });
    timelines.push(timeline1);
    return timelines;
  }

  function generateTimelinesMobile(el) {
    const id = $(el).parents('.hws-next-steps-mobile').attr('id');
    const index = parseInt($(el).attr('data-index'));
    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-next-steps-mobile__flex__single[data-index="${index}"]`,
      opacity: [0, 1],
      translateY: ['50px', 0],
      duration: 1000
    });
    timelines.push(timeline1);
    return timelines;
  }

  function handleAllAnimations(el) {
    const scrollPos = animations.detScrollPos($, el, 400);

    if (scrollPos >= 0) {

      animations.fadeIn($, el, 500)
      
      const heading = el.find('.hws-next-steps__heading');
      animations.fadeInUp($, heading, 500)

      setTimeout(() => {
        const columns = el.find('.hws-next-steps__flex__single');
        columns.each((index, column) => {
          animations.fadeInUp($, $(column), 250, index);
        })
      }, 500)

    }

  }

  function handleAllAnimationsMobile(el) {
    const scrollPos = animations.detScrollPos($, el, 900);

    if (scrollPos >= 0) {
      animations.fadeIn($, el, 500);
      animations.fadeInUp($, el.find('.hws-next-steps-mobile__heading'), 250)
    }

    el.find('.hws-next-steps-mobile__flex__single').each((index, el2) => {
      const scrollPos2 = animations.detScrollPos($, $(el2), 900);

      if (scrollPos2 > 0) {
        animations.fadeInUp($, $(el2), 250)
      }

    })

  }

  $(window).on('load resize scroll', () => {
    
    //desktop
    $('.hws-next-steps').each((index, element) => {
      handleAllAnimations($(element))
    });

    // mobile
    $('.hws-next-steps-mobile').each((index, element) => {
      handleAllAnimationsMobile($(element))
    });

  })


})