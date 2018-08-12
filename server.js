const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const Sequelize = require('sequelize');

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

// setup DB connection
const sequelize = new Sequelize(keys.dbString);
sequelize
  .authenticate()
  .then(() => console.log('connection to DB established'))
  .catch(err => console.log(err));

// models
// Defines primary table (Users)
sequelize.define('users', {
  user_id: {type: Sequelize.INTEGER, primaryKey: true},
  email: {type: Sequelize.STRING, isEmail: true, len: [0,100]},
  display_name: {type: Sequelize.STRING, len: [1,30]},
  dob: Sequelize.DATE,
  language: Sequelize.STRING
});

// Defines Matching data table (matches)
sequelize.define('matches', {
  user_id: {type: Sequelize.INTEGER, primaryKey: true},
  match_id: Sequelize.INTEGER
});

// Defines the table containing users selections in the questionnaire (questionnaires)

sequelize.define('questionnaires', {
  user_id: {type: Sequelize.INTEGER, primaryKey: true},
  question_1: Sequelize.STRING,
  question_2: Sequelize.STRING,
  question_3: Sequelize.STRING,
  question_4: Sequelize.STRING,
  question_5: Sequelize.STRING,
  question_6: Sequelize.STRING
});
// Defines the table containing users selections of preferences (preferences)

sequelize.define('preferences',{
  user_id: {type: Sequelize.INTEGER, primaryKey: true},
  question_1_pref: Sequelize.STRING,
  question_1_importance: Sequelize.INTEGER,
  question_2_pref: Sequelize.STRING,
  question_2_importance: Sequelize.INTEGER,
  question_3_pref: Sequelize.STRING,
  question_3_importance: Sequelize.INTEGER,
  question_4_pref: Sequelize.STRING,
  question_4_importance: Sequelize.INTEGER,
  question_5_pref: Sequelize.STRING,
  question_5_importance: Sequelize.INTEGER,
  question_6_pref: Sequelize.STRING,
  question_6_importance: Sequelize.INTEGER
});

//Defines the table containing user's preferred games(pref_games)
sequelize.define('pref_games', {
  record_id: {type: Sequelize.INTEGER, primaryKey: true},
  user_id: Sequelize.INTEGER,
  game_id: Sequelize.STRING
});


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
