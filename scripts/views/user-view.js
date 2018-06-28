'use strict'

var app = app || {};

(function(module) {

let userView = {};

function resetter() {
    $('.container').hide();
};

userView.initUserDashboard = function() {
    resetter();
    $('#dashboard-button').show();
    $('#user-dashboard').show();
    
};

module.userView = userView;

})(app);