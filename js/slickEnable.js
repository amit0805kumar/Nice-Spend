$(document).ready(() => {
  $(".slick_single").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
  $(".single_swipe").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $(".product_slider_wrapper").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  });

  $(".recentSlider").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });

});