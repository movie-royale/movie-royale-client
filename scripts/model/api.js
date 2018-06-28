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

                app.mostRecentResults = json;

                for (let i = 0; i < json.results.length; i++) {
                    // console.log(json.results[i].id);

                    $('#poster').append(

                        `<div class="movie-preview">
                        <p>${json.results[i].name}</p>
                        <img src=\"http://image.tmdb.org/t/p/w500//${json.results[i].poster_path}" id="${json.results[i].id}"/>
                        
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

$('#poster').on('click', 'img', function () {
    // console.log(this.id, 'is the id of the movie that was clicked');

    console.log(this.id, ' was click')
    console.log(app.mostRecentResults.results[0].id, ' sample')

    
    for (let i in app.mostRecentResults.results) {
        if (parseInt(this.id) === app.mostRecentResults.results[i].id) {
            if (app.mostRecentResults.results[i].first_air_date) {
                var date = app.mostRecentResults.results[i].first_air_date;
                console.log(date + " first_air_date")
            } else if (app.mostRecentResults.results[i].release_date) {
                var date = app.mostRecentResults.results[i].release_date;
                console.log(date + " release_date")
            }



            if (app.mostRecentResults.results[i].name) {
                var title = app.mostRecentResults.results[i].name;
                console.log(title + " name")
            } else if (app.mostRecentResults.results[i].original_title) {
                var title = app.mostRecentResults.results[i].original_title;
                console.log(title + " original_title")
            } else if (app.mostRecentResults.results[i].original_name) {
                var title = app.mostRecentResults.results[i].original_name;
                console.log(title + " original_name")

            } else if (app.mostRecentResults.results[i].originatitlel_name) {
                var title = app.mostRecentResults.results[i].title;
                console.log(title + " title")

            }


            console.log(title, ' was clicked WOOOOOOT');
            $('#title').val(title)
            $('#release_date').val(date)
            $('#description').val(app.mostRecentResults.results[i].overview)
            $('#poster_path').val(app.mostRecentResults.results[i].poster_path)
        }
    }
    // console.log(app.mostRecentResults)


});