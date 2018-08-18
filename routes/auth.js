const express = require('express');
const router = express.Router();
const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('../config/keys');
const Users = require('../models').users;

// serialize the user into the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize a user from the session
passport.deserializeUser(async (id, done) => {
  // ideally should find user from database with given id
  const user = await Users.findById(id);
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
      const { id, emails, displayName, language } = profile;

      // search for existing user here
      const existingUser = await Users.findOne({
        where: { googleId: id }
      });

      // console.log(process.env.DB_STRING);
      if (existingUser) {
        console.log(existingUser.id);
        return done(null, existingUser);
      }

      const user = Users.build({
        googleId: id,
        email: emails[0].value,
        displayName,
        language: language || 'en',
        dob: new Date()
      });

      const newUser = await user.save();
      console.log(newUser);

      // if no existing user, create new user here
      return done(null, newUser);
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

// logout the current user
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// returns the current user object
router.get('/current', (req, res) => res.send(req.user));

module.exports = router;
