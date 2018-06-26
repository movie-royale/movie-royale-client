'use strict';



// $(document).ready(function () {
//     $('.poster-div').slick({
//         slidesToShow: 10,
//         slidesToScroll: 3,
//         autoplay: true,
//         autoplaySpeed: 2000,
//     });

// });

$(document).ready(function () {

    $('.poster-div').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }
        ]
    });
});