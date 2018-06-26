'use strict'

// Initializes home page with standard login
page('/', () => app.loginView.initLoginView());
// Initializes sign up page 
page('/sign-up', () => app.loginView.initSignUpView());


// Initializes about us page
page('/about', () => app.aboutView.initAboutView());

page();