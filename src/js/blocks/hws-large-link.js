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
      targets: `#${id}.hws-large-link .hws-container--full`,
      borderWidth: ['70px', '0px'],
      padding: ['20px', '90px'],
      duration: 1000
    });
    timelines.push(timeline1);
    const timeline2 = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-large-link__title`,
      translateY: ['2rem', '0'],
      opacity: [0, 1],
      duration: 250
    })
    .add({
      targets: `#${id} .hws-large-link__text`,
      translateY: ['2rem', '0'],
      opacity: [0, 1],
      duration: 250
    })
    .add({
      targets: `#${id} .hws-large-link__button-container`,
      translateY: ['2rem', '0'],
      opacity: [0, 1],
      duration: 250
    })
    timelines.push(timeline2);
    return timelines;
  }

  function handleAllAnimations(el, timelines) {
    const offsetTop = $(el).offset().top,
      scrollPos = $(window).scrollTop() - offsetTop,
      maxScrollPos = $(el).outerHeight() -  $(el).find(`.hws-large-link__sticky`).outerHeight();
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

  function generateTimelinesMobile(el) {
    const id = $(el).attr('id');
    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id}.hws-large-link-mobile .hws-container--full`,
      borderWidth: ['30px', '0px'],
      padding: ['20px', '50px'],
      duration: 1000
    });
    timelines.push(timeline1);
    const timeline2 = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-large-link-mobile__title`,
      translateY: ['2rem', '0'],
      opacity: [0, 1],
      duration: 250
    })
    .add({
      targets: `#${id} .hws-large-link-mobile__text`,
      translateY: ['2rem', '0'],
      opacity: [0, 1],
      duration: 250
    })
    .add({
      targets: `#${id} .hws-large-link-mobile__button-container`,
      translateY: ['2rem', '0'],
      opacity: [0, 1],
      duration: 250
    })
    timelines.push(timeline2);
    return timelines;
  }

  function handleAllAnimationsMobile(el, timelines) {
    const offsetTop = $(el).offset().top,
      scrollPos = $(window).scrollTop() - offsetTop,
      maxScrollPos = $(el).outerHeight() -  $(el).find(`.hws-large-link-mobile__sticky`).outerHeight();
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
    $('.hws-large-link').each((index, element) => {
      const timelines = generateTimelines(element);
      handleAllAnimations(element, timelines);
    });
    // mobile
    $('.hws-large-link-mobile').each((index, element) => {
      const timelines = generateTimelinesMobile(element);
      handleAllAnimationsMobile(element, timelines);
    });
  })

})