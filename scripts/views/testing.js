'use strict';


// api example
$('#term').focus(function () {
    var full = $("#poster").has("img").length ? true : false;
    if (full == false) {
        $('#poster').empty();
    }
});

var getPoster = function () {

    var film = $('#term').val();

    if (film == '') {

        $('#poster').html('<div class="alert"><strong>Oops!</strong> Try adding something into the search field.</div>');

    } else {

        $('#poster').html('<div class="alert"><strong>Loading...</strong></div>');

        $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + film + "&callback=?", function (json) {
            if (json != "Nothing found.") {
                console.log(json);
                $('#poster').html(
                    `<p>Your search found: <strong> ${json.results[0].title}</strong></p>
                    <img src=\"http://image.tmdb.org/t/p/w300//${json.results[0].poster_path}"/>
                    <p>Description: </p>`
                );
                // console.log(this);
                // http://image.tmdb.org/t/p/w500//753JNSDgzCnOGd6qCzO0jEIHM4D.jpg
            } else {
                $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=goonies&callback=?", function (json) {

                    console.log(json);
                    $('#poster').html('<div class="alert"><p>We\'re afraid nothing was found for that search.</p></div><p>Perhaps you were looking for The Goonies?</p><img id="thePoster" src="http://image.tmdb.org/t/p/w500/' + json[0].poster_path + ' class="img-responsive" />');
                });
            }
        });

    }

    return false;
}

$('#search').click(getPoster);
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
let scrollLink=$('.scroll');
    // Smooth scrolling
    scrollLink.click(function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: $(this.hash).offset().top-200
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function () {
        let scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            let sectionOffset = $(this.hash).offset().top -100;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    })

})
/////smoothing redirect page end here/////
