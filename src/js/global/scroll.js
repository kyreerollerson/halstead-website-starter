jQuery(document).ready(($) => {

  // when hash link is clicked
  $('a').click(function(e) {
    const href = $(this).attr('href');
    if (href.includes('#') && href != '#') {
      e.preventDefault();
      const target = $(this).attr('href');
      if ($(target).length > 0 && $(target).css('display') != 'none') {
        document.querySelector(target).scrollIntoView({
          behavior: 'smooth'
        })
      } else if ($(`${target}-mobile`).length > 0) {
        document.querySelector(`${target}-mobile`).scrollIntoView({
          behavior: 'smooth'
        })
      }
    }
  })

  // scroll to anchor if it's present
  if(window.location.hash) {
    const hash = window.location.hash;
    const elem = $(hash)
    if (elem) {
      $(window).scrollTop($(hash).offset().top);
    }
  }

});