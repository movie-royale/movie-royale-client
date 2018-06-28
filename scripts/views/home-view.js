'use strict'

var app = app || {};

(function(module){

var homeView = {};

// initialize standard login
homeView.initLoginView = function() {

    $('.container').hide();
    $('#dashboard-button').hide();
    $('#home').show();

    app.Users.fetchAll();
    // routes to user dashboard on form submit
    $('#login').on('click', function(e) {
        e.preventDefault();
        console.log(app.Users.all.length);
        for (let i = 0; i < app.Users.all.length; i++) {
            console.log('in the for loop');
            if ($('#username').val() == app.Users.all[i].username) {
                console.log('userId inside the for loop')
                app.Users.fetchAll();
                var userId = app.Users.all[i].users_id;
            } 
            else {
                app.Users.fetchAll();
                var userId = app.Users.all[i].users_id;
            }
        };
        page(`/dashboard/${userId}`);
    })
};

module.homeView = homeView;

})(app);