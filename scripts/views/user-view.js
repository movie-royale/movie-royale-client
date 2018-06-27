'use strict'

var app = app || {};

(function(module) {

function resetter() {
    $('.container').hide();
};

userView.initUserDashboard = function() {
    resetter();
    $('#user-dashboard').show();
};

module.userView = userView;

})(app);