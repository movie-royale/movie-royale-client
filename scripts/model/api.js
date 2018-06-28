'use strict'



//MORE ABOUT API
const api_key = "1d51b32090673b3394923b86194480f3";

//get unique id
// let movie_id =json.results[0].id;
// console.log(json.results[0].id);

//path to retrieve the individual data
// let movie_data= `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}`



// Search TMDB for movies and render results to page
function getPoster(e) {
    // e.preventDefault();
    var film = $('#term').val();
    if (film == '') {

        $('#poster').html('<div class="alert">I can\'t search for an empty field, sucka!</div>');

    } else {
        $('#poster').empty();
        $.getJSON(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${film}&callback=?`, function (json) {
            if (json.results.length !== 0) {
                console.log(json);
                console.log(json.results[0].id);
                for (let i = 0; i < json.results.length; i++) {
                    // console.log(json.results[i].id);

                    $('#poster').append(

                        `<div class="movie-preview">
                        <p>${json.results[i].title}</p>
                        <img src=\"http://image.tmdb.org/t/p/w500//${json.results[i].poster_path}"/>
                        
                        </div>`
                    );
                }

                showSlider();

            }
            else {
                console.log('Search yields no results');
                $('#poster').empty();
                $('#search-error').html('<alert>Sorry, we couldn\'t find what you were looking for!</alert>');
            };
        })

    };


    return false;
};
//unslick then re-apply template everytime it fires a search
$('#search').on('click', function () {
    fkSlider();
    getPoster();

});
$('#term').keyup(function (event) {
    if (event.keyCode == 13) {
        fkSlider();
        getPoster();
    }
});