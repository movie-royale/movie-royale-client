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
    $('#get-list-button').on('click', function(){
        $('#user-movies').show();
        
    })
};


module.userView = userView;

})(app);