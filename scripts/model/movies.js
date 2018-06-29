'use strict';

var app = app || {};

(function (module) {

    // Constructor and rendering
    function Movies(moviesObj) {
        Object.keys(moviesObj).forEach(key => this[key] = moviesObj[key]);
    };

    // renders movies to handlebars
    Movies.prototype.toHtml = function () {
        let template = Handlebars.compile($('#movies-template').text());
        return template(this);
    };

    $('#add').on('click', handlForm);
    function handlForm(event) {
        event.preventDefault();
        let formData = {};
        formData.title = $('#title').text(),
            formData.release_date = $('#release_date').text(),
            formData.description = $('#description').text(),
            formData.poster_path = $('#poster_path').attr('src')
        
        let movie = new Movies(formData);
        console.log(movie);
        movie.postOne();

    };

    // Load instances
    Movies.all = [];

    // AJAX fetch and load
    Movies.loadAll = rows => {
        Movies.all = rows.map((movie) => new Movies(movie));
    };

    Movies.fetchAll = callback => {
        $.get(`${app.ENV.apiURL}/api/v1/movies`)
            .then(results => {
                Movies.loadAll(results);
                callback();
            })
    };

    Movies.fetchOne = (id, callback) => {
        $.ajax({
            url: `${app.ENV.apiURL}/api/v1/movies/${id}`,
            method: 'GET',
            data: {
                movies_id: 1, // need to pass a variable in here to select specific movies id
            }
        })
            .then(results => {
                movies.loadAll(results);
                callback();
            })
    };

    // Delete Movies
    Movies.deleteOne = (id, callback) => {
        $.ajax({
            url: `${app.ENV.apiURL}/api/v1/movies/${id}`,
            method: 'DELETE',
            data: {
                movies_id: 1, // need to pass a variable in here to select specific movies id
            }
        })
            .then(results => {
                Movies.loadAll(results);
                callback();
            })
    };

    // Post new movie
    Movies.prototype.postOne = function (callback) {
        $.post(`${app.ENV.apiURL}/api/v1/movies`, {
            title: this.title,
            release_date: this.release_date,
            description: this.description,
            poster_path: this.poster_path
        })
            .then(console.log('it works!'))
            .then(results => {
                Movies.loadOne(results);
                callback();
            })
    };

    module.Movies = Movies;

})(app);