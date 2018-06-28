'use strict'

var app = app || {};

(function(module){

var homeView = {};

// initialize standard login
homeView.initLoginView = function() {
    $('.container').hide();
    $('#dashboard-button').hide();
    $('#home').show();

    // routes to user dashboard on form submit
    $('#login').on('click', function(e) {
        e.preventDefault();
        app.Users.fetchAll();
        for (let i = 0; i < app.Users.all.length; i++) {
            if ($('#username').val() == app.Users.all[i].username) {
                let userId = this.users_id;
                console.log(userId)
                // return userId;
            }
        }
        // console.log(this.userId);
        // page(`/dashboard/${userId}`);
    })
};

module.homeView = homeView;

})(app);