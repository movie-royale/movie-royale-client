'use strict'

var app = app || {};

(function(module) {

let leaderboardView = {};


leaderboardView.initLeaderboardView = function() {
    $('.container').hide();
    $('#leaderboards').show();
    
};

module.leaderboardView = leaderboardView;

})(app);