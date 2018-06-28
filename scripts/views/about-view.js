'use strict'

var app = app || {};

(function(module) {

let aboutView = {};

aboutView.initAboutView = function() {

    $('.container').hide(200);
    $('#about-us').show(200);

};

module.aboutView = aboutView;

})(app);