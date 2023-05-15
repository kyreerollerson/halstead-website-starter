jQuery(document).ready(($) => {

  function generateTimelines(el) {
    const id = $(el).attr('id');
    let timelines = [];
    const timeline2 = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id}.hws-transition img:nth-of-type(1)`,
      translateY: ['50px', '0'],
      opacity: [0, 1],
      duration: 250
    })
    .add({
      targets: `#${id}.hws-transition img:nth-of-type(2)`,
      translateY: ['50px', '0'],
      opacity: [0, 1],
      duration: 250
    })
    .add({
      targets: `#${id}.hws-transition img:nth-of-type(3)`,
      translateY: ['50px', '0'],
      opacity: [0, 1],
      duration: 250
    })
    .add({
      targets: `#${id}.hws-transition img:nth-of-type(4)`,
      translateY: ['50px', '0'],
      opacity: [0, 1],
      duration: 250
    })
    timelines.push(timeline2);
    return timelines;
  }

  function handleAllAnimations(el, timelines) {
    const offsetTop = $(el).offset().top,
      scrollPos = $(window).scrollTop() - offsetTop,
      maxScrollPos = $(el).outerHeight() -  $(el).find(`.hws-transition__sticky`).outerHeight();
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

  $(window).on('load resize scroll', () => {
    // desktop
    $('.hws-transition').each((index, element) => {
      const timelines = generateTimelines(element);
      handleAllAnimations(element, timelines);
    });
    // // mobile
    // $('.bas-slides-mobile').each((index, element) => {
    //   timelineUtils.animateMobileTimelines($, element, null, false);
    //   $(element).find('.bas-slides-mobile__slide').each((index2, subelement) => {
    //     timelineUtils.animateMobileTimelines($, subelement, null)
    //   })
    // })
  })

})