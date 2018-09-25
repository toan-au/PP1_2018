const express = require('express');
const router = express.Router();
const passport = require('passport');

// passport strategys
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const facebookStrategy = require('passport-facebook').Strategy;
const discordStrategy = require('passport-discord').Strategy;

// models
const Users = require('../models').users;
const GoogleUsers = require('../models').googleUsers;
const FacebookUsers = require('../models').facebookUsers;
const DiscordUsers = require('../models').discordUsers;

const keys = require('../config/keys');

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
      callbackURL: '/api/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, emails, displayName, language } = profile;

      // search for existing user here
      const existingUser = await GoogleUsers.findOne({
        where: { googleId: id }
      });

      if (existingUser) {
        console.log(
          `existing user found: ${existingUser.googleId} ${existingUser.userId}`
        );
        const user = await Users.findById(existingUser.userId);
        return done(null, user);
      }

      // build a generic User object
      const user = Users.build({
        email: emails[0].value,
        displayName,
        language: language || 'en',
        dob: new Date()
      });

      await user.save();

      // associate googleUser object with bew generic user object
      const googleUser = GoogleUsers.build({
        googleId: id,
        userId: user.id
      });

      // persist to DB
      await googleUser.save();

      // if no existing user, create new user here
      console.log('new user created id:' + googleUser.googleId, ', ' + user.id);
      return done(null, user);
    }
  )
);

passport.use(
  new facebookStrategy(
    {
      clientID: keys.facebookClientId,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/api/auth/facebook/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, displayName, email } = profile;
      // search if existing user
      const existingUser = await FacebookUsers.findById(id);
      if (existingUser) {
        console.log(
          `existing user found: ${existingUser.facebookId} ${
            existingUser.userId
          }`
        );
        const user = await Users.findById(existingUser.userId);
        return done(null, user);
      }

      // build a generic User object
      const user = Users.build({
        displayName,
        language: 'en'
      });

      await user.save();

      // associate googleUser object with bew generic user object
      const facebookUser = FacebookUsers.build({
        facebookId: id,
        userId: user.id
      });

      // persist to DB
      await facebookUser.save();

      console.log(
        'new user created id:' + facebookUser.facebookId,
        ', ' + facebookUser.userId
      );
      return done(null, user);
    }
  )
);

passport.use(
  new discordStrategy(
    {
      clientID: keys.discordClientId,
      clientSecret: keys.discordClientSecret,
      callbackURL: '/api/auth/discord/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, displayName, email } = profile;
      // search if existing user
      const existingUser = await DiscordUsers.findById(id);
      if (existingUser) {
        console.log(
          `existing user found: ${existingUser.discordId} ${
            existingUser.userId
          }`
        );
        const user = await Users.findById(existingUser.userId);
        return done(null, user);
      }

      // build a generic User object
      const user = Users.build({
        displayName,
        language: 'en'
      });

      await user.save();

      // associate googleUser object with bew generic user object
      const discordUser = DiscordUsers.build({
        discordId: id,
        userId: user.id
      });

      // persist to DB
      await discordUser.save();

      console.log(
        'new user created id:' + discordUser.discordId,
        ', ' + discordUser.userId
      );
      return done(null, user);
    }
  )
);

// user authentication routes
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

router.get(
  '/discord',
  passport.authenticate('discord', { failureRedirect: '/' })
);

// callbacks
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    if (!req.user.finishedRegistration) {
      return res.redirect('/register');
    }
    res.redirect('/');
  }
);

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    if (!req.user.finishedRegistration) {
      return res.redirect('/register');
    }
    res.redirect('/');
  }
);

router.get(
  '/discord/callback',
  passport.authenticate('discord', { failureRedirect: '/login' }),
  (req, res) => {
    if (!req.user.finishedRegistration) {
      return res.redirect('/register');
    }
    res.redirect('/');
  }
);

// logout the current user
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// returns the current user object
router.get('/current', (req, res) => {
  //console.log('user: ' + req.user);
  res.send(req.user);
});

module.exports = router;
