'use strict'

var app = app || {};

(function(module) {

let leaderboardView = {};


leaderboardView.initLeaderboardView = function() {

    $('.container').hide();
    $('#leaderboards').show(200);
  
};

module.leaderboardView = leaderboardView;

})(app);