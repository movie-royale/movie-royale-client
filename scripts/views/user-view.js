'use strict'

var app = app || {};

(function (module) {

    let userView = {};

    userView.initUserDashboard = function (ctx) {
        $('#poster').empty();
        $('#term').val('');
        $('.container').hide();
        $('#dashboard-button').show();
        $('#user-dashboard').show();

        // console.log(ctx.params);
        // app.Users.fetchOne(ctx);


        $('#get-list-button').on('click', function () {
            $('#user-movies').show();

            app.Movies.fetchAll();
            console.log('WE GOT A USER MOVIE 0')
            for (let i in app.Movies.all) {
                console.log('WE GOT A USER MOVIE 1')

                if (app.Movies.all[i].user_number === window.location.href) {
                    console.log('WE GOT A USER MOVIE 2')
                    $('#user-movies').empty().append(`<img id="person" src="http://image.tmdb.org/t/p/w500/${app.mostRecentResults.results[i].poster_path}" />`)
                    console.log('WE GOT A USER MOVIE 3')
                } 
            }

        })

    };








    module.userView = userView;

})(app);