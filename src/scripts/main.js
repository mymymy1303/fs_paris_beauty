// Main
$(document).ready(function () {
	if ($('.canhcam-carousel-1 .owl-carousel').length) {
        $('.canhcam-carousel-1 .owl-carousel').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            items: 2,
            loop: true,
            center: false,
            padding: 10,
            margin: 25,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            nav: true,
            dots: false,
            autoplay: false,
            callbacks: true,
            responsive: {
                320: {
                    items: 1,
                    center: true,
                    nav: false,
                    dots: true
                },
                480: {
                    items: 1,
                    center: true,
                    nav: false,
                    dots: true
                },
                768: {
                    items: 1,
                    center: true,
                    nav: false,
                    dots: true
                },
                992: {
                    items: 1,
                    center: true,
                    nav: false,
                    dots: true
                },
                1200: {
                    items: 2,
                    nav: false,
                    dots: true
                }
            }
        });
    }
});
