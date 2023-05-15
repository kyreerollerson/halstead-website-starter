jQuery(document).ready(($) => {

  // button stuff
  $('.hws-button').each((index, element) => {
    const text = $(element).html();
    $(element).html(`<span class="hws-button__text">${text}</span><span class="hws-button__arrow"></span>`)
  })

});
