'use strict'

var app = app || {};

(function(module) {

let userView = {};

function resetter() {
    $('.container').hide();
};

userView.initUserDashboard = function() {
    resetter();
    $('#user-dashboard').show(500);
    
};

module.userView = userView;

})(app);