jQuery(document).ready(($) => {

  function generateTimelines(el) {
    const id = $(el).parents('.hws-pricing-columns').attr('id');
    const index = parseInt($(el).attr('data-index'));
    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'linear',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-pricing-columns__flex__single[data-index="${index}"]`,
      opacity: [0, 1],
      translateY: ['50px', 0],
      duration: 1000,
      delay: ((index % 3) * 800) + 800
    });
    timelines.push(timeline1);
    return timelines;
  }

  function generateTimelinesLabel(el) {
    const id = $(el).parents('.hws-pricing-columns').attr('id');
    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'linear',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-pricing-columns__label`,
      opacity: [0, 1],
      translateY: ['50px', 0],
      duration: 1000
    });
    timelines.push(timeline1);
    return timelines;
  }

  function generateTimelinesMonthlyYearly(el) {
    const id = $(el).parents('.hws-pricing-columns').attr('id');
    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'linear',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-pricing-columns__monthly-yearly`,
      opacity: [0, 1],
      translateY: ['50px', 0],
      duration: 1000
    });
    timelines.push(timeline1);
    return timelines;
  }

  function generateTimelinesMobile(el) {
    const id = $(el).parents('.hws-pricing-columns-mobile').attr('id');
    const index = parseInt($(el).attr('data-index'));
    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'linear',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-pricing-columns-mobile__flex__single[data-index="${index}"]`,
      opacity: [0, 1],
      translateY: ['50px', 0],
      duration: 1000
    });
    timelines.push(timeline1);
    return timelines;
  }

  function generateTimelinesLabelMobile(el) {
    const id = $(el).parents('.hws-pricing-columns-mobile').attr('id');
    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'linear',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-pricing-columns-mobile__label`,
      opacity: [0, 1],
      translateY: ['50px', 0],
      duration: 1000
    });
    timelines.push(timeline1);
    return timelines;
  }

  function generateTimelinesMonthlyYearlyMobile(el) {
    const id = $(el).parents('.hws-pricing-columns-mobile').attr('id');
    let timelines = [];
    const timeline1 = anime.timeline({
      easing: 'linear',
      duration: 1000,
      autoplay: false
    })
    .add({
      targets: `#${id} .hws-pricing-columns-mobile__monthly-yearly`,
      opacity: [0, 1],
      translateY: ['50px', 0],
      duration: 1000
    });
    timelines.push(timeline1);
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

  function handleAllAnimationsMobile(el, timelines) {
    const offsetTop = $(el).offset().top - 800,
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

  function detTallestTitle(el) {
    const columns = $(el).find('.hws-pricing-columns__flex__single');
    let tallestTitle = 0;
    columns.each((index, column) => {
      const $column = $(column);
      $column.find('.hws-pricing-columns__flex__single__title-outer').css('height', '');
      const titleHeight = $column.find('.hws-pricing-columns__flex__single__title-outer').outerHeight();
      if (titleHeight > tallestTitle)
          tallestTitle = titleHeight;
    });
    columns.each((index2, column) => {
      const $column = $(column);
      $column.find('.hws-pricing-columns__flex__single__title-outer').css('height', `${tallestTitle}px`);
    })
  }

  $(window).on('load resize scroll', () => {
    // desktop
    $('.hws-pricing-columns').each((index, element) => {
      detTallestTitle(element);
    });
    $('.hws-pricing-columns__flex__single').each((index, element) => {
      const timelines = generateTimelines(element);
      handleAllAnimations(element, timelines);
    });
    $('.hws-pricing-columns__label').each((index, element) => {
      const timelines = generateTimelinesLabel(element);
      handleAllAnimations(element, timelines);
    });
    $('.hws-pricing-columns__monthly-yearly').each((index, element) => {
      const timelines = generateTimelinesMonthlyYearly(element);
      handleAllAnimations(element, timelines);
    });
    // mobile
    $('.hws-pricing-columns-mobile__flex__single').each((index, element) => {
      const timelines = generateTimelinesMobile(element);
      handleAllAnimationsMobile(element, timelines);
    });
    $('.hws-pricing-columns-mobile__label').each((index, element) => {
      const timelines = generateTimelinesLabelMobile(element);
      handleAllAnimationsMobile(element, timelines);
    });
    $('.hws-pricing-columns-mobile__monthly-yearly').each((index, element) => {
      const timelines = generateTimelinesMonthlyYearlyMobile(element);
      handleAllAnimationsMobile(element, timelines);
    });
  })
  
  // switch desktop
  $('.hws-pricing-columns__monthly-yearly__switch').click((e) => {
    const $this = $(e.currentTarget);
    $this.toggleClass('yearly');
    // for yearly
    if ($this.hasClass('yearly')) {
      $this.parents('.hws-pricing-columns').find('.hws-pricing-columns__flex__single__price').each((index, element) => {
        const yearly = $(element).find('span').attr('data-yearly');
        $(element).animate({'opacity': 0}, 250, function () {
          $(this).find('span').html(yearly);
        }).animate({'opacity': 1}, 250);
      })
    } 
    // for monthly
    else {
      $this.parents('.hws-pricing-columns').find('.hws-pricing-columns__flex__single__price').each((index, element) => {
        const monthly = $(element).find('span').attr('data-monthly');
        $(element).animate({'opacity': 0}, 250, function () {
          $(this).find('span').html(monthly);
        }).animate({'opacity': 1}, 250);
      })
    }
  })

  // switch mobile
  $('.hws-pricing-columns-mobile__monthly-yearly__switch').click((e) => {
    const $this = $(e.currentTarget);
    $this.toggleClass('yearly');
    // for yearly
    if ($this.hasClass('yearly')) {
      $this.parents('.hws-pricing-columns-mobile').find('.hws-pricing-columns-mobile__flex__single__price').each((index, element) => {
        const yearly = $(element).find('span').attr('data-yearly');
        $(element).animate({'opacity': 0}, 250, function () {
          $(this).find('span').html(yearly);
        }).animate({'opacity': 1}, 250);
      })
    } 
    // for monthly
    else {
      $this.parents('.hws-pricing-columns-mobile').find('.hws-pricing-columns-mobile__flex__single__price').each((index, element) => {
        const monthly = $(element).find('span').attr('data-monthly');
        $(element).animate({'opacity': 0}, 250, function () {
          $(this).find('span').html(monthly);
        }).animate({'opacity': 1}, 250);
      })
    }
  })


})