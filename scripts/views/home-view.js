'use strict'

var app = app || {};

(function(module){

var homeView = {};

// reset the page
function resetter() {
    $('.container').hide();
};

// initialize standard login
homeView.initLoginPage = function() {
    resetter();
    $('#home').show();

    // routes to user dashboard on form submit
    $('.login-form').on('submit', function() {
        page(`/users/${this.data.user_id}/dashboard`);
    })
};

module.homeView = homeView;

})(app);