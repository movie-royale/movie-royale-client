'use strict';

//header shrink when scroll down
// $(document).on("scroll", function () {
//     if
//     ($(document).scrollTop() > 200) {
//         $("header").addClass("shrink");
//         // $('#navbar').stop().animate({ height: 50 },80);

//     }
//     else {
//         $("header").removeClass("shrink");
//     }
// });
//testing scrolling 


/////smoothing redirect page/////
$(document).ready(function () {
    let scrollLink = $('.scroll');
    // Smooth scrolling
    scrollLink.click(function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: $(this.hash).offset().top - 200
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function () {
        let scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            let sectionOffset = $(this.hash).offset().top - 100;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    })

})
/////smoothing redirect page end here/////




