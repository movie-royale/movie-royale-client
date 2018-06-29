'use strict'

var app = app || {};

(function(module) {

let userView = {};

userView.initUserDashboard = function(ctx) {
    $('#poster').empty();
    $('#term').val('');
    $('.container').hide();
    $('#dashboard-button').show();
    $('#user-dashboard').show();

    // console.log(ctx.params);
    // app.Users.fetchOne(ctx);
    
};

userView.initMovieView = function () {
    console.log('initMovieView route UP');
    // $('#').on('click', function(){
    //     // Do stuff
    // })
};

userView.setUserData = function() {}

module.userView = userView;

})(app);