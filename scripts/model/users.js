'use strict';

var app = app || {};

(function (module) {

    // Constructor
    function Users(usersObj) {
        Object.keys(usersObj).forEach(key => this[key] = usersObj[key]);
    };
    // Render Users for leaderboards and search
    Users.prototype.toHtml = function () {
        let template = Handlebars.compile($('#users-template').text());
        return template(this);
    };

    $('#login').on('click', handlForm);
    function handlForm(event) {
        event.preventDefault();
        let formData = {};
        formData.username = $('#username').val(),
        formData.password = $('#password').val(),
        formData.email = $('#email').val()
        let user = new Users(formData);
        console.log(user);
        user.postOne();
    };

    // Load instances
    Users.all = [];
    Users.one = [];

    // AJAX fetch and load
    Users.loadAll = rows => {
        Users.all = rows.map((user) => new Users(user));
    };

    Users.loadOne = rows => {
        Users.one = rows.map((user) => new Users(user));
    };

    // AJAX fetch and load
    Users.fetchAll = () => {
        $.get(`${app.ENV.apiURL}/api/v1/users`)
            .then(results => {
                Users.loadAll(results);
                // callback();
            })
    };

    Users.fetchOne = (id) => {
        $.ajax({
            url: `${app.ENV.apiURL}/api/v1/users/${id}`,
            method: 'GET',
            data: {
                users_id: id
            }
        })
            .then(results => {
                Users.loadOne(results);
            })
    };

    Users.deleteOne = (id, callback) => {
        $.ajax({
            url: `${app.ENV.apiURL}/api/v1/users/${id}`,
            method: 'DELETE'
        })
            .then(results => {
                Users.loadAll(results);
                callback();
            })
    };

    Users.truncateTable = (callback) => {
        $.ajax({
            url: `${app.ENV.apiURL}/api/v1/users`,
            method: 'DELETE'
        })
            .then(results => {
                Users.loadAll(results);
                callback();
            })
    };

    Users.prototype.postOne = function (callback) {
        $.post(`${app.ENV.apiURL}/api/v1/users`, {
            username: this.username,
            password: this.password,
            email: this.email
        })
            .then(console.log('it works!'))
            .then(results => {
                Users.loadAll(results);
                // FIX THIS SHIT
                callback();
            })
    };





    module.Users = Users;

})(app);