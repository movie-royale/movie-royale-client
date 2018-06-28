'use strict'

// Initializes home page with standard login
page('/', () => app.homeView.initLoginView());
page('/movie-royale-client', () => app.homeView.initLoginView());
// Initializes user dashboard
page('/users/:user_id/dashboard', () => app.userView.initUserDashboard());
page('/dashboard', () => app.userView.initUserDashboard());
// Initializes individual user profile from user search/leaderboard link **stretch**
// page('/users/:user_id', (ctx) => app.userView.initUser(ctx));
// Initializes leaderboards
page('/leaderboards', () => app.leaderboardView.initLeaderboardView());
// Initializes about us page
page('/about-us', () => app.aboutView.initAboutView());

page();