'use strict'

var app = app || {};

(function(module) {

let userView = {};

userView.initUserDashboard = function() {

    $('.container').hide();
    $('#dashboard-button').show();
    $('#user-dashboard').show();

};

userView.setUserData = function() {}

module.userView = userView;

})(app);