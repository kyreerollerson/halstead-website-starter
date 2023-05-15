jQuery(document).ready(($) => {

  function handleAnimation(el, numLines) {
    const offsetTop = $(el).offset().top,
      scrollPos = $(window).scrollTop() - offsetTop,
      maxScrollPos = $(el).outerHeight() -  $(el).find(`.hws-feature-text__sticky`).outerHeight();
      progressPoint = scrollPos/maxScrollPos;

    if (progressPoint <= 0) {
      $(el).find('.hws-feature-text__center-text__highlighters__single, .hws-feature-text__center-text__highlighter-overlays__single').css('width', '100%');
    } else if (progressPoint >= 0 && progressPoint <= 1) {
      const increment = 1 / numLines;
      $(el).find('.hws-feature-text__center-text__highlighters__single, .hws-feature-text__center-text__highlighter-overlays__single').each((index, line) => {
        const startingPoint = index * increment,
          endingPoint = startingPoint + increment;
        if (progressPoint <= startingPoint) {
          $(line).css('width', '100%');
        }
        else if (progressPoint >= startingPoint && progressPoint <= endingPoint) {
          const progressPointOffset = progressPoint - (index * increment),
            width = 100 - ((progressPointOffset / increment) * 100);
          $(line).css('width', `${width}%`);
        }
        else if (progressPoint > endingPoint) {
          $(line).css('width', '0');
        }
      })
      $(el).find('.hws-feature-text__center-text__highlighter-overlays__single').each((index, line) => {
        const startingPoint = index * increment,
          endingPoint = startingPoint + increment;
        if (progressPoint <= startingPoint) {
          $(line).css('width', '100%');
        }
        else if (progressPoint >= startingPoint && progressPoint <= endingPoint) {
          const progressPointOffset = progressPoint - (index * increment),
            width = 100 - ((progressPointOffset / increment) * 100);
          $(line).css('width', `${width}%`);
        }
        else if (progressPoint > endingPoint) {
          $(line).css('width', '0');
        }
      })
    } else if (progressPoint > 1) {
      $(el).find('.hws-feature-text__center-text__highlighters__single').css('width', '0%');
    }
  }

  function handleAnimationMobile(el, numLines) {
    const offsetTop = $(el).offset().top - 120,
      scrollPos = $(window).scrollTop() - offsetTop,
      maxScrollPos = 120;
      progressPoint = scrollPos/maxScrollPos;

    if (progressPoint <= 0) {
      $(el).find('.hws-feature-text-mobile__center-text__highlighters__single, .hws-feature-text-mobile__center-text__highlighter-overlays__single').css('width', '100%');
    } else if (progressPoint >= 0 && progressPoint <= 1) {
      const increment = 1 / numLines;
      $(el).find('.hws-feature-text-mobile__center-text__highlighters__single, .hws-feature-text-mobile__center-text__highlighter-overlays__single').each((index, line) => {
        const startingPoint = index * increment,
          endingPoint = startingPoint + increment;
        if (progressPoint <= startingPoint) {
          $(line).css('width', '100%');
        }
        else if (progressPoint >= startingPoint && progressPoint <= endingPoint) {
          const progressPointOffset = progressPoint - (index * increment),
            width = 100 - ((progressPointOffset / increment) * 100);
          $(line).css('width', `${width}%`);
        }
        else if (progressPoint > endingPoint) {
          $(line).css('width', '0');
        }
      })
      $(el).find('.hws-feature-text-mobile__center-text__highlighter-overlays__single').each((index, line) => {
        const startingPoint = index * increment,
          endingPoint = startingPoint + increment;
        if (progressPoint <= startingPoint) {
          $(line).css('width', '100%');
        }
        else if (progressPoint >= startingPoint && progressPoint <= endingPoint) {
          const progressPointOffset = progressPoint - (index * increment),
            width = 100 - ((progressPointOffset / increment) * 100);
          $(line).css('width', `${width}%`);
        }
        else if (progressPoint > endingPoint) {
          $(line).css('width', '0');
        }
      })
    } else if (progressPoint > 1) {
      $(el).find('.hws-feature-text-mobile__center-text__highlighters__single').css('width', '0%');
    }
  }

  $(window).on('load resize scroll', () => {
    // desktop
    $('.hws-feature-text').each((index, element) => {
      let spanHeight = $(element).find('.hws-feature-text__size-checker').css('line-height');
        spanHeight = parseInt(spanHeight.replace(/\D/g,''));
      const numLines = Math.floor($(element).find('.hws-feature-text__center-text').height() / spanHeight);
      $(element).find('.hws-feature-text__center-text__highlighters__single, .hws-feature-text__center-text__highlighter-overlays__single').remove();
      for (let i = 0; i < numLines; i++) {
        $(element).find('.hws-feature-text__center-text__highlighters').append(`<span class="hws-feature-text__center-text__highlighters__single" style="height:${spanHeight}px"></span>`);
        $(element).find('.hws-feature-text__center-text__highlighter-overlays').append(`<span class="hws-feature-text__center-text__highlighter-overlays__single" style="height:${spanHeight}px"></span>`)
      }
      handleAnimation(element, numLines);
    })
    // mobile
    $('.hws-feature-text-mobile').each((index, element) => {
      let spanHeight = $(element).find('.hws-feature-text-mobile__size-checker').css('line-height');
        spanHeight = parseInt(spanHeight.replace(/\D/g,''));
      const numLines = Math.floor($(element).find('.hws-feature-text-mobile__center-text').height() / spanHeight);
      $(element).find('.hws-feature-text-mobile__center-text__highlighters__single, .hws-feature-text-mobile__center-text__highlighter-overlays__single').remove();
      for (let i = 0; i < numLines; i++) {
        $(element).find('.hws-feature-text-mobile__center-text__highlighters').append(`<span class="hws-feature-text-mobile__center-text__highlighters__single" style="height:${spanHeight}px"></span>`);
        $(element).find('.hws-feature-text-mobile__center-text__highlighter-overlays').append(`<span class="hws-feature-text-mobile__center-text__highlighter-overlays__single" style="height:${spanHeight}px"></span>`)
      }
      handleAnimationMobile(element, numLines);
    })
  })

})