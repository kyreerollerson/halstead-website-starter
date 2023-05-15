jQuery(document).ready(($) => {

  function generateTimelines(el) {
    const id = $(el).attr('id');
    const numElements = $(el).find('.hws-jumbotron-scrolling__sticky__bg-image').length;

    let timelines = [],
      animationDuration = (1000/numElements) * 0.5;
      animationPause = (1000/numElements) * 0.5;

    const timeline1 = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000,
      autoplay: false
    });
    $(el).find('.hws-jumbotron-scrolling__sticky__bg-image').each((index) => {
      if (index == 0) {
        timeline1.add({
          targets: `#${id} .hws-jumbotron-scrolling__sticky__bg-image[data-index="${index}"]`,
          translateY: ['0', '0'],
          duration: animationDuration
        });
      } else {
        timeline1.add({
          targets: `#${id} .hws-jumbotron-scrolling__sticky__bg-image[data-index="${index}"]`,
          translateY: ['100%', '0'],
          duration: animationDuration
        });
      }
      timeline1.add({
        targets: `#${id} .hws-jumbotron-scrolling__sticky__bg-image[data-index="${index}"]`,
        translateY: ['0', '0'],
        duration: animationPause
      });
    });
    timelines.push(timeline1);

    const timeline2 = anime.timeline({
      easing: 'linear',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-container--large`,
      translateY: [0, '-100px'],
      duration: 1000
    })
    timelines.push(timeline2);

    $(el).find('.hws-jumbotron-scrolling__icon img').each((index) => {
      const timeline = anime.timeline({
        easing: 'easeInOutSine',
        duration: 1000,
        autoplay: false
      });
      // const startDelay = (1000 * index) - animationDuration;
      // console.log(`for index ${index}, startDelay is ${startDelay}`)
      // const endDelay = 1000 - startDelay - animationDuration;
      // console.log(`for index ${index}, endDelay is ${endDelay}`)
      if (index == 0) {
        timeline.add({
          targets: `#${id} .hws-jumbotron-scrolling__icon img[data-index="${index}"]`,
          opacity: [1, 1],
          duration: animationDuration
        });
      } else {
        timeline.add({
          targets: `#${id} .hws-jumbotron-scrolling__icon img[data-index="${index}"]`,
          opacity: [0, 0],
          duration: animationDuration * index
        });
      }
      if (index == numElements - 1) {
        timeline.add({
          targets: `#${id} .hws-jumbotron-scrolling__icon img[data-index="${index}"]`,
          opacity: [0, 1],
          duration: animationDuration
        });
        // console.log(`for index ${index}, remaining duration is ${1000 - (timeline.children.reduce((acc, curr) => acc + curr.duration, 0))}`)
        timeline.add({
          targets: `#${id} .hws-jumbotron-scrolling__icon img[data-index="${index}"]`,
          opacity: [1, 1],
          duration: 1000 - (timeline.children.length * 250)
        });
      }
      else {
        timeline.add({
          targets: `#${id} .hws-jumbotron-scrolling__icon img[data-index="${index}"]`,
          opacity: [1, 0],
          duration: animationDuration
        });
        // console.log(`for index ${index}, remaining duration is ${1000 - (timeline.children.reduce((acc, curr) => acc + curr.duration, 0))}`)
        timeline.add({
          targets: `#${id} .hws-jumbotron-scrolling__icon img[data-index="${index}"]`,
          opacity: [0, 0],
          duration: 1000 - (timeline.children.length * 250)
        });
      }
      // console.log(timeline);
      timelines.push(timeline);
    });

    // console.log(timeline1);

    return timelines;
  }

  function handleAllAnimations(el, timelines) {
    const offsetTop = $(el).offset().top,
      scrollPos = $(window).scrollTop() - offsetTop,
      maxScrollPos = $(el).outerHeight() -  $(el).find(`.hws-jumbotron-scrolling__sticky`).outerHeight();
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

  // desktop
  $('.hws-jumbotron-scrolling').each((index, element) => {
    const numElements = $(element).find('.hws-jumbotron-scrolling__sticky__bg-image').length;
    $(element).css('height', `${150 * (numElements > 1 ? numElements : 2)}vh`);
    const timelines = generateTimelines(element);
    handleAllAnimations(element, timelines);
  })

  $(window).on('load resize scroll', () => {
    // desktop
    $('.hws-jumbotron-scrolling').each((index, element) => {
      const numElements = $(element).find('.hws-jumbotron-scrolling__sticky__bg-image').length;
      $(element).css('height', `${150 * (numElements > 1 ? numElements : 2)}vh`);
      const timelines = generateTimelines(element);
      handleAllAnimations(element, timelines);
    })
  })

})