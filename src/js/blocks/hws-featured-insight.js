jQuery(document).ready(($) => {

  function generateTimelines(el) {
    const id = $(el).attr('id');
    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'linear',
      duration: 1000,
      autoplay: false
    })
    timeline1.add({
      targets: `#${id} .hws-featured-insight__flex__left`,
      width: ['100%', '50%'],
      paddingRight: ['0px', '12px'],
      duration: 500,
    })
    timeline1.add({
      targets: `#${id} .hws-featured-insight__flex__left`,
      duration: 500,
    })
    timelines.push(timeline1);

    const timeline2 = anime.timeline({
      easing: 'linear',
      duration: 1000,
      autoplay: false
    })
    timeline2.add({
      targets: `#${id} .hws-featured-insight__flex__right`,
      width: ['0%', '50%'],
      paddingLeft: ['0px', '12px'],
      duration: 500,
    })
    timeline2.add({
      targets: `#${id} .hws-featured-insight__article`,
      translateY: ['100%', '0%'],
      duration: 500,
    })
    timelines.push(timeline2);

    const timeline3 = anime.timeline({
      easing: 'linear',
      duration: 1000,
      autoplay: false
    })
    timeline3.add({
      targets: `#${id} .hws-button--black`,
      width: ['100%', 'calc(100% - 10px)'],
      duration: 500,
    })
    timeline3.add({
      targets: `#${id} .hws-button--black`,
      duration: 500,
    })
    timelines.push(timeline3);

    return timelines;
  }

  function handleAllAnimations(el, timelines) {
    const offsetTop = $(el).offset().top,
      scrollPos = $(window).scrollTop() - offsetTop,
      maxScrollPos = $(el).outerHeight() -  $(el).find(`.hws-featured-insight__sticky`).outerHeight();
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
    $('.hws-featured-insight').each((index, element) => {
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