jQuery(document).ready(($) => {

  function generateTimelines(el) {
    const id = $(el).attr('id');
    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'linear',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id}.hws-blockquote .hws-container--full`,
      borderWidth: ['70px', '0px'],
      padding: ['20px', '90px'],
      duration: 1000
    });
    timelines.push(timeline1);
    const timeline2 = anime.timeline({
      easing: 'linear',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-blockquote__quote`,
      translateY: ['2rem', '0'],
      opacity: [0, 1],
      duration: 500
    })
    .add({
      targets: `#${id} .hws-blockquote__person`,
      translateY: ['2rem', '0'],
      opacity: [0, 1],
      duration: 250
    })
    .add({
      targets: `#${id} .hws-blockquote__title`,
      translateY: ['2rem', '0'],
      opacity: [0, 1],
      duration: 250
    });
    timelines.push(timeline2);
    return timelines;
  }

  function handleAllAnimations(el, timelines) {
    const offsetTop = $(el).offset().top,
      scrollPos = $(window).scrollTop() - offsetTop,
      maxScrollPos = $(el).outerHeight() -  $(el).find(`.hws-blockquote__sticky`).outerHeight();
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
    $('.hws-blockquote').each((index, element) => {
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