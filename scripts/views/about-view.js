'use strict'

var app = app || {};

(function(module) {

let aboutView = {};

aboutView.initAboutView = function() {

    $('.container').hide();
    $('#about-us').show();

};

module.aboutView = aboutView;

})(app);