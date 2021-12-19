$('[name="phone"]').mask('+7(999) 999-99-99');

// mobile menu
$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.certificate-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                variableWidth: false,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                variableWidth: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        }

    ]
});

//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//плавный скролл end

new WOW().init();