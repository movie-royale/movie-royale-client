'use strict';

var app = app || {};

(function(module) {

// Constructor and rendering
function Movies(moviesObj) {
    Object.keys(moviesObj).forEach(key => this[key] = moviesObj[key]); 
};

Movies.prototype.toHtml = function() {
    let template = Handlebars.compile($('#insert-template-name').text());
    return template(this);
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
            Movies_id: 1, // need to pass a variable in here to select specific movies id
            }
    })
        .then(results => {
            Movies.loadAll(results);
            callback();
        })
};

// Delete Movies
Movies.deleteOne = (id, callback) => {
    $.ajax({
        url: `${app.ENV.apiURL}/api/v1/movies/${id}`,
        method: 'DELETE',
        data: {
            Movies_id: 1, // need to pass a variable in here to select specific movies id
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
        rating: this.rating,
        description: this.description
    })
    .then(results => {
        Movies.loadOne(results);
        callback();
    })
};

module.Movies = Movies;

})(app);