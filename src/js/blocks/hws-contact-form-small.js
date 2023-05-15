jQuery(document).ready(($) => {

  function generateTimelines(el) {
    const id = $(el).attr('id');
    const index = parseInt($(el).attr('data-index'));

    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'linear',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} h2`,
      opacity: [0, 1],
      translateY: ['50px', 0],
      duration: 1000
    });
    timelines.push(timeline1);

    const timeline2 = anime.timeline({
      easing: 'linear',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-contact-form-small__flex__left`,
      opacity: [0, 1],
      translateY: ['50px', 0],
      duration: 1000,
      delay: 800
    });
    timelines.push(timeline2);

    const timeline3 = anime.timeline({
      easing: 'linear',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-contact-form-small__flex__right`,
      opacity: [0, 1],
      translateY: ['50px', 0],
      duration: 1000,
      delay: 1600
    });
    timelines.push(timeline3);

    return timelines;
  }

  function handleAllAnimations(el, timelines) {
    const offsetTop = $(el).offset().top - 600,
      scrollPos = $(window).scrollTop() - offsetTop,
      maxScrollPos = 120;
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
    $('.hws-contact-form-small').each((index, element) => {
      const timelines = generateTimelines(element);
      handleAllAnimations(element, timelines);
    });

  })


})