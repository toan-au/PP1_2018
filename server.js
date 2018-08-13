const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

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

// test that model works
// const Users = require('./models').users;
// const users = Users.findAll().then(res => console.log(res));

// routes
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

// if the user's request reaches this point, it means that it is not an api call
// so they want to actually VIEW our app (react app)
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static('./client/build'));
  app.get('*', (req, res) => {
    // send them the react bundle
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// listen to whatever port heroku serves our app on
// OR port 5000 (in dev environment)
app.listen(process.env.PORT || 5000);
