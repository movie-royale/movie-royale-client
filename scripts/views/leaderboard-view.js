'use strict'

var app = app || {};

(function(module) {

let leaderboardView = {};

function resetter() {
    $('.container').hide();
};

leaderboardView.initLeaderboardView = function() {
    resetter();
    $('#leaderboards').show(500);
    
};

module.leaderboardView = leaderboardView;

})(app);