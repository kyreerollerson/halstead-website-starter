jQuery(document).ready(($) => {

  // // button stuff
  // $('.hws-button').each((index, element) => {
  //   $(element).append('<div class="hws-button__hover-el"></div>');
  // })

  $(window).mousemove(e => {
    handleCursorMove(e);
  });

  $(window).on('load resize scroll', e => {
    // handleCursorScroll();
  });

  $('body').on('mouseenter', 'a:not([disabled]), button:not([disabled]), .hws--clickable:not([disabled])', e => {
    if ($(e.target).hasClass('slick-prev')) {
      $('#hws-cursor').addClass('prev-activated');
    }
    else if ($(e.target).hasClass('slick-next')) {
      $('#hws-cursor').addClass('next-activated');
    }
    else {
      $('#hws-cursor').addClass('enlarged');
    }
  });

  $('body').on('mouseleave', 'a:not([disabled]), button:not([disabled]), .hws--clickable:not([disabled])', e => {
    $('#hws-cursor').removeClass('prev-activated')
      .removeClass('next-activated')
      .removeClass('enlarged');
  });

  function handleCursorMove(event) {
    const cursor = $('#hws-cursor'),
      mouseX = event.clientX - (cursor.outerWidth()/2),
      mouseY = event.clientY - (cursor.outerHeight()/2);
    if (!cursor.hasClass('show'))
      cursor.addClass('show')
    cursor.css(
      'transform', 
      `translate3d(${mouseX}px, ${mouseY}px, 0)`
    )

  }

  function handleCursorScroll() {
    const cursor = $('#hws-cursor'),
      scrollY = $(window).scrollTop();
      cursor.css(
        'top', 
        `${scrollY}px`
      )
  }

});
