// Скрипт slick (слайдер)
$(".slider-block").slick({
    dots: true,
    autoplay: false,
    infinite: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 576,
        settings: {
            slidesToShow: 3,
            vertical: true,
            verticalSwiping: true,
            slidesToScroll: 3
        }
    }]
});