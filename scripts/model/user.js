'use strict';

Users.fetchAll = callback => {
    $.get('http://localhost:5000/api/v1/users')
        .then(results => {
            Users.loadAll(results);
            callback();
        })
};


Users.fetchOne = (id, callback) => {
    $.ajax({
        url: `http://localhost:5000/api/v1/users/${id}`,
        method: 'GET',
        data: {
            users_id: 1, // need to pass a variable in here to select specific users id
            }
    })
        .then(results => {
            Users.loadOne(results);
            callback();
        })
};

Users.deleteOne = (id, callback) => {
    $.ajax({
        url: `http://localhost:5000/api/v1/users/${id}`,
        method: 'DELETE',
        data: {
            users_id: 1, // need to pass a variable in here to select specific users id
            }
    })
        .then(results => {
            Users.loadOne(results);
            callback();
        })
};

Users.prototype.postOne = function (callback) {
    $.post('http://localhost:5000/api/v1/users', {
        username: this.username,
        password: this.password,
        email: this.email
    })
    .then(results => {
        Users.loadOne(results);
        callback();
    })
};