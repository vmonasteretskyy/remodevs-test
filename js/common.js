$(document).ready(function () {

    // trusted us - slider
    $('.trusted-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2500,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: false,
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

    $('.trusted-slider a').click(function (e) {
        e.preventDefault();
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

    // init select style
    if ($('select, input[type="file"]').length > 0) {
        $(function () {
            $('select, input[type="file"]').styler();
        });
    }



    $(".applybox .blue-btn").on("click", function (event) {
        var headerHeight = 93;
        // if ($(window).width() < 1651 && $(window).width() > 1024) {
        //     var headerHeight = 80;
        // }
        // else if ($(window).width() < 992 && $(window).width() > 575) {
        //     var headerHeight = 60;
        // } else if ($(window).width() < 576) {
        //     var headerHeight = 55;
        // }
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 40;
        $('body,html').animate({
            scrollTop: top - headerHeight
        }, 1000);
    });


    $('.knowledgebsse__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><svg width="52" height="14" viewBox="0 0 52 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.04904 13.0986L0.999348 7.04894M0.999348 7.04894L7.04904 0.999252M0.999348 7.04894L50.2773 7.04894" stroke="#1348A7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="52" height="14" viewBox="0 0 52 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.2283 1L50.278 7.04969M50.278 7.04969L44.2283 13.0994M50.278 7.04969H1" stroke="#1348A7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    });


});