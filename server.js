/**
 * Express server.
 *
 * @author Toan Au, Cindy Tran, Robert Jeffs, Ronald Rinaldy, Martin Balakrishnan.
 */

const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./app/config/keys');
const bodyParser = require('body-parser');

const app = express();

// middleware
// configure cookie settings
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

// routes
const authRoutes = require('./app/routes/auth');
const apiRoutes = require('./app/routes/api');

// api endpoints
app.use('/api', apiRoutes);
app.use('/api/auth', authRoutes);

// if the user's request reaches this point, it means that it is not an api call
// so they want to actually VIEW our app (react app)
if (process.env.NODE_ENV === 'production') {
  const path = require('path');

  // makes the react build folder static
  app.use(express.static('./client/build'));
  app.get('*', (req, res) => {
    // send them the react bundle from static folder
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// listen to whatever port heroku serves our app on
// OR port 5000 (in dev environment)
app.listen(process.env.PORT || 5000);
