'use strict'

var app = app || {};

(function (module) {

    var homeView = {};

    // initialize standard login
    homeView.initLoginView = function () {
        app.Users.fetchAll();

        $('.container').hide();
        $('#dashboard-button').hide();
        $('#home').show();
        $('#login-form').hide();
        $('#go-back').on('click', function(){
            $('#login-form').hide();
            $('#welcome-message').show();
        });

        $('#welcome-button').on('click', function(){
        // routes to user dashboard on form submit
            $('#welcome-message').hide();
            $('#login-form').show();
            $('#login-form').on('submit', function (e) {
                e.preventDefault();
                let formData = {};
                formData.username = $('#username').val(),
                    formData.password = $('#password').val(),
                    formData.email = $('#email').val()
                let user = new app.Users(formData);

                console.log(user);
                // console.log(app.Users.all.length);
                if (!app.Users.all.length) {
                    user.postOne();
                } else {

                    for (let i = 0; i < app.Users.all.length; i++) {
                        // console.log($('#username').val(), ' $(#username).val()');
                        // console.log(app.Users.all[i].username, ' app.Users.all[i].username');
                        if ($('#username').val() === app.Users.all[i].username) {
                            console.log('userId inside THE IFFFFFF')
                            // app.Users.fetchAll();
                            var userId = app.Users.all[i].users_id;
                            page(`/dashboard/${userId}`);
                            break;
                        }
                        else {
                            var userId = user.postOne();
                            console.log(userId, ' is the new users ID');
                            break;
                        }
                    };
                }

            })
        })
    };

    module.homeView = homeView;

})(app);