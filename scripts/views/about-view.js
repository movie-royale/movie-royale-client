'use strict'

var app = app || {};

(function(module) {

let aboutView = {};

function resetter() {
    $('.container').hide();
};

aboutView.initAboutView = function() {
    resetter();
    $('#about-us').show(500);
    
};

module.aboutView = aboutView;

})(app);