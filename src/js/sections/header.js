jQuery(document).ready(($) => {

  function generateTimelines(e) {
    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#hws-header.hws-header--transition`,
      backdropFilter: ['blur(0)', 'blur(20px)'],
      webkitBackdropFilter: ['blur(0)', 'blur(20px)'],
      backgroundColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)'],
      height: ['94px', '70px'],
      padding: ['24px 24px', '12px 24px'],
      duration: 1000
    });
    timelines.push(timeline1);

    const timeline2 = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#hws-header.hws-header--transition .hws-header__line`,
      backgroundColor: ['rgba(255,255,255,0.5)', 'rgba(255,255,255,0)'],
      duration: 1000
    });
    timelines.push(timeline2);
    return timelines;
  }

  function handleAnimations(el, timelines) {
    const offsetTop = $(el).offset().top,
      scrollPos = $(window).scrollTop() - offsetTop,
      maxScrollPos = 400;
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

  const timelines = generateTimelines(),
      firstElement = $('.hws-block--sticky-outer-200, .hws-block--sticky-outer-300, .hws-block--sticky-outer-400, .hws-block--sticky-outer-500, .hws-block--full-height, .hws-block--full-height-min').first();
    if (firstElement && $('.hws-header--transition').length > 0)
      handleAnimations(firstElement, timelines);

  $(window).on('load resize scroll', () => {
    const timelines = generateTimelines(),
      firstElement = $('.hws-block--sticky-outer-200, .hws-block--sticky-outer-300, .hws-block--sticky-outer-400, .hws-block--sticky-outer-500, .hws-block--full-height, .hws-block--full-height-min').first();
    if (firstElement && $('.hws-header--transition').length > 0)
      handleAnimations(firstElement, timelines);
  })

  setTimeout(function() {
    $('.hws-header__menu-button, .hws-header__start-today').fadeIn(500);
  }, 250)

});
