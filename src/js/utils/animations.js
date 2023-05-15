const fadeIn = ($, el, time, index, totalNum = 3) => {
  if (!el.hasClass('animated')) {
    const delay  = index != null ? (index % totalNum) * time : 0;
    anime({
      targets: el.get(0),
      easing: 'easeInOutSine',
      duration: time + delay,
      opacity: [0, 1],
      delay: delay,
      autoplay: true,
      begin: function() {
        el.addClass('animated');
      }
    });
  }
};

const fadeInUp = ($, el, time, index, totalNum = 3) => {
  if (!el.hasClass('animated')) {
    const delay  = index != null ? (index % totalNum) * time : 0;
    anime({
      targets: el.get(0),
      easing: 'easeInOutSine',
      duration: time + delay,
      opacity: [0, 1],
      translateY: ['50px', 0],
      delay: delay,
      autoplay: true,
      begin: function() {
        el.addClass('animated');
      }
    });
  }
};

const fadeInOverlay = ($, el, time, index, totalNum = 3) => {
  if (!el.hasClass('animated')) {
    const delay  = index != null ? (index % totalNum) * time : 0;
    anime({
      targets: el.get(0),
      easing: 'easeInOutSine',
      duration: time + delay,
      opacity: [0, 1],
      delay: delay,
      autoplay: true,
      begin: function() {
        el.addClass('animated');
      }
    });
  }
}

const backgroundShrink = ($, el, time, index, totalNum = 3) => {
  if (!el.hasClass('animated')) {
    const delay  = index != null ? (index % totalNum) * time : 0;
    anime({
      targets: el.get(0),
      easing: 'easeInOutSine',
      duration: time + delay,
      scale: [1.5, 1],
      translateX: ['-50%', '-50%'],
      translateY: ['-50%', '-50%'],
      delay: delay,
      autoplay: true,
      begin: function() {
        el.addClass('animated');
      }
    });
  }
}

const detScrollPos = ($, el, offset) => {
  const offsetTop = el.offset().top - offset,
      scrollPos = $(window).scrollTop() - offsetTop;
  return scrollPos;
}

const handleOpenMenu = ($, anim) => {
  const modals = $('.hws-main-menu').filter(function() {
    return $(this).css('left') == '0px';
  })
  const numMenus = modals.length;
  if (numMenus > 0) {
    const scrollTop = $(window).scrollTop();
    $('body').addClass(`hws--menu-open`);
    $('body').attr('data-scroll-pos', scrollTop);
  } else {
    if ($('body').hasClass('hws--menu-open')) {
      $('body').removeClass(`hws--menu-open`);
      const scrollTop = $('body').attr('data-scroll-pos') || 0;
      $(window).scrollTop(scrollTop);
    }
  }
}

export {
  fadeIn,
  fadeInUp,
  fadeInOverlay,
  backgroundShrink,
  detScrollPos,
  handleOpenMenu
}
