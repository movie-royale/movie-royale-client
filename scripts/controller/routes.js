'use strict'

// Initializes home page with standard login
page('/', () => app.homeView.initLoginView());
page('/movie-royale-client', () => app.homeView.initLoginView());
// Initializes user dashboard
// Initializes individual user profile from user search/leaderboard link **stretch**
page('/dashboard/:users_id', (ctx) => app.userView.initUserDashboard(ctx));
page('/dashboard', () => app.userView.initUserDashboard());
// Initializes leaderboards
page('/leaderboards', () => app.leaderboardView.initLeaderboardView());
// Initializes about us page
page('/about-us', () => app.aboutView.initAboutView());

page();