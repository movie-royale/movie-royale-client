'use strict'

var app = app || {};

(function(module) {

let aboutView = {};

function resetter() {
    $('.container').hide();
};

aboutView.initAboutView = function() {
    resetter();
    $('#about-us').show();
    
};

module.aboutView = aboutView;

})(app);