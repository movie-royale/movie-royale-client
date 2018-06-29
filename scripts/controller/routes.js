'use strict'

// Initializes home page with standard login
page('/', () => app.homeView.initLoginView());
page('/movie-royale-client', () => app.homeView.initLoginView());
// Initializes user dashboard
page('/dashboard/:users_id', (ctx) => app.userView.initUserDashboard(ctx));
// Initializes movie view
page('/leaderboards', () => app.leaderboardView.initLeaderboardView());
// Initializes about us page
page('/about-us', () => app.aboutView.initAboutView());

page();