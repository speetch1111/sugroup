function func() {
  let nav_height = $('.about__nav').innerHeight();

  $('.about__nav-wrap').css({
    'height': nav_height,
  });

  $('.about__nav li a').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).legth != 0) {
      $('html, body').animate({
        scrollTop: $(scroll_el).offset().top - 75
      }, 500);

    }
    return false;
  });

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    $('.waypoint').each(function () {
      if (scrollTop >= $(this).offset().top - 100) {
        $('.about__nav li a[href="#' + $(this).attr('id') + '"]').parent().addClass('active').siblings().removeClass('active');
      } else {
        $('.about__nav li a[href="#' + $(this).attr('id') + '"]').parent().removeClass('active');
      }
    });


  });

  var windowWidth = $(window).width();
  containerWidth = $('.wrapper').width();
  marginfree = (windowWidth - containerWidth) / 2;
  
  if ($(window).width() > 930) {

  $('.contacts__bottom').css({
    'margin-right': -marginfree
  });

  }
}

var swiper = new Swiper(".main_slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".cart_slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".recomend-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 4,
});

$('.burger, .main_menu_close').on('click', function () {
  $('.main_menu').toggleClass('active');
  $('body').toggleClass('oh')
});

$('.open__map').on('click', function () {
  $('.contacts__map').toggleClass('mob');
  $(this).text(function(i, text){
    return text === "Посмотреть на карте" ? "Закрыть карту" : "Посмотреть на карте";
})
});

$('.contacts__open').on('click', function () {
  $('.contacts__drop').addClass('open');
  $('.contacts__map').addClass('open');
  $('.main_menu_top h3,.main_menu_body').addClass('hidden');
  $('.main_menu').addClass('scroll')
});

$('.contacts__drop .close').on('click', function () {
  $('.contacts__drop').removeClass('open');
  $('.contacts__map').removeClass('open');
  $('.main_menu_top h3,.main_menu_body').removeClass('hidden');
  $('.main_menu').removeClass('scroll')
});

$('.objects_mobile_tab:first-child').on('click', function () {
  $('.objects_info').removeClass('active');
  $('.objects').addClass('active');
});
$('.objects_mobile_tab:last-child').on('click', function () {
  $('.objects_info').addClass('active');
  $('.objects').removeClass('active');
});

$('.team__form-field input[type=file]').on('change', function () {
  let file = this.files[0];
  $(this).next().html(file.name);
});


$(window).scroll(function () {
  var offset = $('.about__nav-wrap').offset();
  var scrolltop = $(window).scrollTop();
  var windowWidth = $(window).width();
  containerWidth = $('.wrapper').width();
  marginfree = (windowWidth - containerWidth) / 2;

  if (scrolltop > offset.top) {
    $('.about__nav').addClass('scroll');
    $('.about__nav').css({
      'padding-left': marginfree
    });
  } else {
    $('.about__nav').removeClass('scroll');
    $('.about__nav').css({
      'padding-left': 0
    });
  }

  return;

});



$(window).resize(func);


$(window).init(func)

    // Табы
    if ($(window).width() > 700) {

    $('.tabs__content > div').hide();

    $('.tabs__links a').click(function () {
      if ($(this).parent().hasClass('active')) return;
      $(this).parent().addClass('active').siblings().removeClass('active');
      target = $(this).attr('href');
      $(target).show().siblings().hide();
  
      return false;
    });
  
    $('.tabs__links li:first-child a').click();
    }
    // Табы

    $('.mob__head').click(function () {
      $(this).toggleClass('active').siblings('ul').slideToggle();
    })

Fancybox.bind();