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
$('.burger, .close').on('click', function() {
    $('.main_menu').toggleClass('active');
});
$('.objects_mobile_tab:first-child').on('click', function() {
    $('.objects_info').removeClass('active');
    $('.objects').addClass('active');
});
$('.objects_mobile_tab:last-child').on('click', function() {
    $('.objects_info').addClass('active');
    $('.objects').removeClass('active');
});