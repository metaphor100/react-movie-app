$(document).ready(function() {
    $('.homeCarousel').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        mobileFirst: true,
        swipe: true,
    })
})

$(document).ready(function() {
    $('.userHeader').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    })
})