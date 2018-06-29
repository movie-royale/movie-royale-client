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
    $('#user-movies').hide();

    $('#get-list-button').on('click', function(){
        // page(`/your-movies/${userId}`);
        $('#user-movies').show();
    })
    
};

module.userView = userView;

})(app);