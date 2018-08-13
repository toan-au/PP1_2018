const express = require('express');
const router = express.Router();
const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('../config/keys');
const Users = require('../models').users;

// serialize the user into the session
passport.serializeUser((user, done) => {
  // temporarily set id to 0
  user.id = 0;
  done(null, user.id);
});

// deserialize a user from the session
passport.deserializeUser((id, done) => {
  // ideally should find user from database with given id
  user = {};
  done(null, user);
});

// setup passport to use the google OAuth2 strategy
passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = {};

      // search for existing user here
      const response = await Users.findAll({});
      console.log(response);

      // if no existing user, create new user here
      done(null, user);
    }
  )
);

// user authenticates with google
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  }
);

// returns the current user object
router.get('/current', (req, res) => res.send(req.user));

module.exports = router;
