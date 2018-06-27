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

    // AJAX fetch and load
    Users.loadAll = rows => {
        Users.all = rows.map((user) => new Users(user));
    };

    // AJAX fetch and load
    Users.fetchAll = callback => {
        $.get(`${app.ENV.apiURL}/api/v1/users`)
            .then(results => {
                Users.loadAll(results);
                callback();
            })
    };

    Users.fetchOne = (id, callback) => {
        $.ajax({
            url: `${app.ENV.apiURL}/api/v1/users/${id}`,
            method: 'GET',
            data: {
                users_id: 1, // need to pass a variable in here to select specific users id
            }
        })
            .then(results => {
                Users.loadAll(results);
                callback();
            })
    };

    Users.deleteOne = (id, callback) => {
        $.ajax({
            url: `${app.ENV.apiURL}/api/v1/users/${id}`,
            method: 'DELETE',
            data: {
                users_id: 1, // need to pass a variable in here to select specific users id
            }
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
                Users.loadOne(results);
                callback();
            })
    };





    module.Users = Users;

})(app);