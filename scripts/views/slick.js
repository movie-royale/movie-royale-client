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
    // $('.poster-div').slick({
        $('.poster-div').slick({
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '15px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '5px',
                    slidesToShow: 5
                }
            }
        ]
    });
});


// testing

// $(document).ready(function () {
//     // $('.responsive').slick({
//         $('.testing-div').slick({

//         infinite: true,
//         speed: 300,
//         slidesToShow: 8,
//         slidesToScroll: 1,
//         responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 6,
//                 slidesToScroll: 1,
//                 // centerMode: true,

//             }

//         }, {
//             breakpoint: 800,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 3,
//                 dots: true,
//                 infinite: true,

//             }


//         }, {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 dots: true,
//                 infinite: true,

//             }
//         }, {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 dots: true,
//                 infinite: true,
//                 autoplay: true,
//                 autoplaySpeed: 2000,
//             }
//         }]
//     });


// });