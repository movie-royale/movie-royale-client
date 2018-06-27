'use strict';



$(document).ready(function () {
    $('.testing-div').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,

    });

});
// $(document).ready(function () {
//     $('.poster-div').slick({
//         infinite: true,
//         slidesToShow: 4,
//         slidesToScroll: 3,

//     });

// });

// $(document).ready(function () {
//     $('.fk').slick({
//         infinite: true,
//         slidesToShow: 4,
//         slidesToScroll: 3,

//     });

// });


// $(document).ready(function () {
//     $('.add-remove').slick({
//         slidesToShow: 3,
//         slidesToScroll: 3
//     });
//     $('.js-add-slide').on('click', function () {
//         slideIndex++;
//         $('.add-remove').slick('slickAdd', '<div><h3>' + slideIndex + '</h3></div>');
//     });

//     $('.js-remove-slide').on('click', function () {
//         $('.add-remove').slick('slickRemove', slideIndex - 1);
//         if (slideIndex !== 0) {
//             slideIndex--;
//         }
//     });
// });
function showSlider() {
    $('#poster').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3
    });
}






