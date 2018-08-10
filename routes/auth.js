const express = require('express');
const router = express.Router();
const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;

// setup passport to use the google OAuth2 strategy
passport.use(
  new googleStrategy(
    {
      clientID: '',
      clientSecret: '',
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {}
  )
);

router.get('/', (req, res) => {
  console.log('auth route');
});

module.exports = router;
