jQuery(document).ready(($) => {

  function generateTimelines(el) {
    const id = $(el).attr('id');
    const numElements = $(el).find('.hws-services__heading').length;
    let timelines = [];
    let animationStartAndStop = (1000/numElements) * 0.1;
    let animationPause = (1000/numElements) * 0.6;
    const timeline1 = anime.timeline({
      easing: 'linear',
      duration: 1000 - animationStartAndStop,
      autoplay: false
    });
    $(el).find('.hws-services__heading').each((index, heading) => {
      timeline1.add({
        targets: `#${id} .hws-services__heading[data-index="${index}"]`,
        opacity: 0.25,
        duration: 0
      });
      timeline1.add({
        targets: `#${id} .hws-services__heading[data-index="${index}"]`,
        zIndex: 2,
        duration: 0
      });
      timeline1.add({
        targets: `#${id} .hws-services__heading[data-index="${index}"]`,
        opacity: 1,
        duration: animationStartAndStop
      });
      timeline1.add({
        targets: `#${id} .hws-services__heading[data-index="${index}"]`,
        opacity: 1,
        duration: animationPause
      });
      if (index != numElements -1 ) {
        timeline1.add({
          targets: `#${id} .hws-services__heading[data-index="${index}"]`,
          opacity: 0.25,
          duration: animationStartAndStop
        });
      }
    });
    timelines.push(timeline1);
    const timeline2 = anime.timeline({
      easing: 'linear',
      duration: 1000 - animationStartAndStop,
      autoplay: false
    });
    $(el).find('.hws-services__description').each((index, description) => {
      timeline2.add({
        targets: `#${id} .hws-services__description[data-index="${index}"]`,
        zIndex: 0,
        duration: 1
      });
      timeline2.add({
        targets: `#${id} .hws-services__description[data-index="${index}"]`,
        opacity: 0,
        duration: 0
      });
      timeline2.add({
        targets: `#${id} .hws-services__description[data-index="${index}"]`,
        zIndex: 2,
        duration: 1
      });
      timeline2.add({
        targets: `#${id} .hws-services__description[data-index="${index}"]`,
        opacity: 1,
        duration: animationStartAndStop
      });
      timeline2.add({
        targets: `#${id} .hws-services__description[data-index="${index}"]`,
        opacity: 1,
        duration: animationPause
      });
      if (index != numElements -1 ) {
        timeline2.add({
          targets: `#${id} .hws-services__description[data-index="${index}"]`,
          opacity: 0,
          duration: animationStartAndStop
        });
      }
      timeline2.add({
        targets: `#${id} .hws-services__description[data-index="${index}"]`,
        zIndex: 0,
        duration: 1
      });
    });
    timelines.push(timeline2);
    return timelines;
  }

  function handleAllAnimations(el, timelines) {
    const offsetTop = $(el).offset().top,
      scrollPos = $(window).scrollTop() - offsetTop,
      maxScrollPos = $(el).outerHeight() -  $(el).find(`.hws-services__sticky`).outerHeight();
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
    $('.hws-services').each((index, element) => {
      const numElements = $(element).find('.hws-services__heading').length;
      $(element).css('height', `${200 * numElements}vh`);
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