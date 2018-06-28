'use strict'

var app = app || {};

(function(module){

var homeView = {};

// reset the page
function resetter() {
    $('.container').hide();
};

// initialize standard login
homeView.initLoginView = function() {
    resetter();
    $('#dashboard-button').hide();
    $('#home').show();

    
    // routes to user dashboard on form submit
    $('#login').on('click', function(e) {
        e.preventDefault();
        app.Users.fetchAll();
        let userId = app.Users.all[0].users_id;
        console.log(app.Users.all[0].users_id);
        // page(`/dashboard/${userId}`);
    })
};

module.homeView = homeView;

})(app);