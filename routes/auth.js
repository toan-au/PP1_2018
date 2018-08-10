const express = require('express');
const router = express.Router();
const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('../config/keys');

// setup passport to use the google OAuth2 strategy
passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      let user = {};

      // search for existing user here
      console.log('wow');
      // if no existing user, create new user here
      done(null, user);
    }
  )
);

// user authenticates with google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  }
);

module.exports = router;
