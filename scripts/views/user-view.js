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

userView.setUserData = function() {}

module.userView = userView;

})(app);