'use strict';




// dynamic slick template

function showSlider() {
    $('#poster').slick({
        dots: true,
        infinite: false,
        speed: 300,
        rows: 2,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}


//dynamic unslick function
function fkSlider() {
    $('#poster').slick('unslick');
}

//
// $(function fkSlider() {
//     $('#poster').slick('unslick');
// });


//slick carousel template
$(document).ready(function () {
    $('.testing-div').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 100,

    });
});

// $(document).ready(function () {
//     $('#poster').slick({
//         rows: 3,
//         infinite: true,
//         slidesToShow: 4,
//         slidesToScroll: 100,
//     });
// });



//new toy
$(document).ready(function () {
    $('#poster').slick({
        dots: true,
        infinite: false,
        speed: 300,
        rows: 3,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
