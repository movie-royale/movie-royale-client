'use strict'


// Search TMDB for movies and render results to page
var getPoster = function () {

    var film = $('#term').val();

    if (film == '') {

        $('#poster').html('<div class="alert">I can\'t search for an empty field, sucka!</div>');

    } else {
        $('#poster').empty();
        $.getJSON(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${film}&callback=?`, function (json) {
            if (json.results.length !== 0) {
                console.log(json);
                for (let i = 0; i < 10; i++) {
                    $('#poster').append(

                        `<div class="poster-div slick-slide slick-active"><p>${json.results[i].title}</p>
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

    };

    return false;
};

$('#search').on('click', getPoster);
$('#term').keyup(function (event) {
    if (event.keyCode == 13) {
        getPoster();
    }
});