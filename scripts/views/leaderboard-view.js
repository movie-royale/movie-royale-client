'use strict'

var app = app || {};

(function(module) {

let leaderboardView = {};

function resetter() {
    $('.container').hide();
};

leaderboardView.initLeaderboardView = function() {
    resetter();
    $('#leaderboards').show();
    
};

module.leaderboardView = leaderboardView;

})(app);