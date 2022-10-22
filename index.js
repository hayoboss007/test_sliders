const settingSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    mobileFirst: false,
}

$(document).ready(function () {
    $('.slider').slick(settingSlider);
})