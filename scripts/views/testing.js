'use strict';


// api example

var getPoster = function () {

    var film = $('#term').val();

    if (film == '') {

        $('#poster').html('<div class="alert">I can\'t search for an empty field, sucka!</div>');

    } else {
        $('#poster').empty();
        $.getJSON(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${film}&callback=?`, function (json) {
            if (json.results.length !== 0) {
                console.log(json);
                // $('.responsive').html(`<div class="responsive">respond</div>`);
                for (let i = 0; i < 5; i++) {
                    // $('.responsive').append(
                    $('.poster-div').append(

                        `<div class="slick-slide slick-cloned"><p>${json.results[i].title}</p>
                        <img src=\"http://image.tmdb.org/t/p/w300//${json.results[i].poster_path}"/></div>`
                    );
                }
            }
            else {
                console.log('Search yields no results');
                $('#poster').empty();
                $('#search-error').html('<alert>Sorry, we couldn\'t find what you were looking for!</alert>');
            };
        });

    }

    return false;
}

$('#search').on('click', getPoster);
$('#term').keyup(function (event) {
    if (event.keyCode == 13) {
        getPoster();
    }
});
//api example end here






//header shrink when scroll down
$(document).on("scroll", function () {
    if
    ($(document).scrollTop() > 200) {
        $("header").addClass("shrink");
        // $('#navbar').stop().animate({ height: 50 },80);

    }
    else {
        $("header").removeClass("shrink");
    }
});
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




