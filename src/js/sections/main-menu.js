const animations = require('../utils/animations');

jQuery(document).ready(($) => {

  // function to toggle menu button
  const toggleMenuIcon = () => {
    const currSrc = $('.hws-header__menu-button__icon-box img').attr('src');
    let targetSrcName = ''
    if (currSrc.includes('menu-to-open')) {
      targetSrcName = '/menu-to-close.svg';
    } else if (currSrc.includes('menu-to-close')) {
      targetSrcName = '/menu-to-open.svg';
    }
    const prefix = currSrc.substring(0, currSrc.indexOf('/menu'));
    const final = prefix + targetSrcName + '?t=' + Date.now();
    $('.hws-header__menu-button__icon-box img').attr('src', final);
  }

  // function to det durations
  const detDuration = numLinks => {
    // base
    let acc = 250 * numLinks;
    // adder
    for(let i=0; i>acc; i++) {
      acc+= 100 * i;
    }
    // subtract
    acc-= 100 * numLinks
  }

  const numLinks = $('.hws-header__nav > li').length;
  const linkDuration = detDuration(numLinks);

  const menuTimeline =  anime.timeline({
    easing: 'easeInOutSine',
    duration: 1000 + linkDuration,
    autoplay: false,
    begin: function(anim) {
      animations.handleOpenMenu($, anim);
      $('.hws-overlay').fadeIn(500);
      $('.hws-header').addClass('menu-activated-ready');
      $('.hws-header').addClass('menu-activated');
      $('.hws-header__menu-button span').html('Close');
      toggleMenuIcon();
    },
    complete: function(anim) {
      animations.handleOpenMenu($, anim)
    }
  })
  // menu overall
  .add({
    targets: '#hws-main-menu',
    left: ['-100%', '0'],
    duration: 500,
    changeComplete: function(anim) {
      if (anim.reversed) {
        $('.hws-header').removeClass('menu-activated-ready');
      }
    }
  })
  // left menu overlay
  .add({
    targets: '#hws-main-menu__left__overlay',
    opacity: [0, 1],
    duration: 500,
    changeComplete: function(anim) {
      if (anim.reversed) {
        $('.hws-overlay').fadeOut(500);
        $('.hws-header').removeClass('menu-activated');
        $('.hws-header__menu-button span').html('Menu');
        toggleMenuIcon();
      }
    }
  })
  // links
  .add({
    targets: `.hws-header__nav > li`,
    translateX: ['100%', '0'],
    duration(el, i) {
      return 250 + (i * 100)
    },
    delay(el, i) {
      return 100 * i
    }
  });

  // deal with sub-items
  $(window).on('load', () => {

    $('.hws-header__nav > li').each((index, element) => {
      $(element).attr('data-index', index);
    })
    

    $('.hws-header__nav > li.menu-item-has-children').each((index, element) => {
      // add arrow
      $(element).append('<div class="arrow"></div>');

      // get title
      const title = $(element).find(' > a').text();

      // add sub-menu
      const subMenu = $(element).find('.sub-menu');
      subMenu.attr('data-index', $(element).attr('data-index'));
      subMenu.prepend(`<h3>${title}</h3>`);
      subMenu.prepend('<div class="arrow hws--clickable"></div>')
      $('#hws-main-menu__right').append(subMenu);
    });
  })

  // menu button
  $('.hws-header__menu-button').click(e => {
    e.preventDefault();
    // to activate
    if (!$('.hws-header__menu-button').hasClass('activated')) {
      $('.hws-header__menu-button').addClass('activated');
      if (menuTimeline.reversed) {
        menuTimeline.pause();
        menuTimeline.reverse();
      }
      menuTimeline.play();
    }
    // to deactivate
    else {
      $('.hws-header__menu-button').removeClass('activated');
      if (!menuTimeline.reversed) {
        menuTimeline.pause();
        menuTimeline.reverse();
      }
      menuTimeline.play();
      $('.hws-header__nav > li').removeClass('activated').removeClass('deactivated');
      $('#hws-main-menu__right .sub-menu').removeClass('activated');
    }
  });

  $('body').on('click', '.hws-overlay', function(e){
    if (!$('.hws-header__menu-button').hasClass('activated')) {
      if (menuTimeline.paused == false || menuTimeline.completed != false) {
        $('.hws-header__menu-button').click();
      }
    }
  })

  $('#hws-main-menu__right').click(function(e){
    if ($(e.target).attr('id') != 'hws-main-menu__right') return;
    if ($('.hws-header__menu-button').hasClass('activated')) {
      if (menuTimeline.paused == false || menuTimeline.completed != false) {
        $('.hws-header__menu-button').click();
      }
    }
  })

  // submenu
  $('.hws-header__nav > li.menu-item-has-children').click(function(e) {
    e.preventDefault();
    
    // activate
    if (!$(this).hasClass('activated')) {
      const targetIndex = $(this).attr('data-index');

      $('.hws-header__nav > li').each(function(index, element) {
        if($(element).attr('data-index') == targetIndex) {
          $(element).addClass('activated');
          $(element).removeClass('deactivated');
        } else {
          $(element).removeClass('activated');
          $(element).addClass('deactivated');
        }
      })

      $('#hws-main-menu__right .sub-menu').each(function(index, element) {
        if($(element).attr('data-index') == targetIndex) {
          $(element).addClass('activated');
        } else {
          $(element).removeClass('activated');
        }
      })
    }

    // deactivate
    else {
      $('.hws-header__nav > li').removeClass('activated').removeClass('deactivated');
      $('#hws-main-menu__right .sub-menu').removeClass('activated');
    }

  })

  // deactivate with arrow
  $('.hws-main-menu').on('click', '.sub-menu .arrow', () => {
    $('.hws-header__nav > li').removeClass('activated').removeClass('deactivated');
    $('#hws-main-menu__right .sub-menu').removeClass('activated');
  })

});