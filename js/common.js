$(document).ready(function () {

    // trusted us - slider
    $('.trusted-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    // header - add shadow

    $(window).scroll(function () {
        if ($(window).scrollTop() > 40) {
            $('header.header').addClass('header__shadow');
        } else {
            $('header.header').removeClass('header__shadow')
        }
    });

    // menu mobile
    if ($(window).width() < 992) {
        $('.submenu').click(function () {
            $(this).find('ul').slideToggle();
        });
    }


    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.mobilemenu-wrapper').toggleClass('open');
    });






});