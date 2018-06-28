'use strict';




// dynamic slick template

function showSlider() {
    $('#poster').slick({
        dots: true,
        infinite: true,
        speed: 300,
        rows: 2,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                rows: 1,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
}


//dynamic unslick function
function fkSlider() {
    $('#poster').slick('unslick');
}



//slick carousel template
// $(document).ready(function () {
//     $('.team-info-movies').slick({
//         infinite: true,
//         slidesToShow: 4,
//         slidesToScroll: 100,

//     });
// });


function showteam() {
    $('.team-info-movies').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 100,

    })
}
showteam();


//new toy
$(document).ready(function () {
    $('#poster').slick({
        dots: true,
        infinite: true,
        speed: 300,
        rows: 2,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
});



//for about page
// $(document).ready(function () {

//     $('#team-info-movies').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 3
//     });
// })