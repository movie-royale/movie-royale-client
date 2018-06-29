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
            formData.poster_path = $('#poster_path').attr('src'),
            formData.user_number = window.location.href
        
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

    Movies.fetchAll = () => {
        $.get(`${app.ENV.apiURL}/api/v1/movies`)
            .then(results => {
                Movies.loadAll(results);
                // callback();
            })
    };

    Movies.fetchOne = (ctx) => {
        $.get(`${app.ENV.apiURL}/api/v1/users/${ctx.params.user_number}`)



            .then(results => {
                Movies.loadOne(results);
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
    Movies.prototype.postOne = function () {
        $.post(`${app.ENV.apiURL}/api/v1/movies`, {
            title: this.title,
            release_date: this.release_date,
            description: this.description,
            poster_path: this.poster_path,
            user_number: this.user_number
        })
            .then(console.log(this.title, this.release_date, this.description, this.poster_path, this.user_number, 'RIGGGGHHHHTTTT HHHEEERRRRRREERERERERER bitch'))

    };

    module.Movies = Movies;

})(app);