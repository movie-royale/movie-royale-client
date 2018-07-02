'use strict'

var app = app || {};

(function (module) {

    let aboutView = {};

    aboutView.initAboutView = function () {


        $('.container').hide();
        $('#about-us').show();
        showTeam();

    };

    module.aboutView = aboutView;

})(app);
