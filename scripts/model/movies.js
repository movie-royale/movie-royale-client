'use strict';

Movies.fetchAll = callback => {
    $.get('http://localhost:5000/api/v1/movies')
        .then(results => {
            Movies.loadAll(results);
            callback();
        })
};


Movies.fetchOne = (id, callback) => {
    $.ajax({
        url: `http://localhost:5000/api/v1/movies/${id}`,
        method: 'GET',
        data: {
            Movies_id: 1, // need to pass a variable in here to select specific movies id
            }
    })
        .then(results => {
            Movies.loadOne(results);
            callback();
        })
};

Movies.deleteOne = (id, callback) => {
    $.ajax({
        url: `http://localhost:5000/api/v1/movies/${id}`,
        method: 'DELETE',
        data: {
            Movies_id: 1, // need to pass a variable in here to select specific movies id
            }
    })
        .then(results => {
            Movies.loadOne(results);
            callback();
        })
};

Movies.prototype.postOne = function (callback) {
    $.post('http://localhost:5000/api/v1/movies', {
        title: this.title,
        rating: this.rating,
        description: this.description
    })
    .then(results => {
        Movies.loadOne(results);
        callback();
    })
};