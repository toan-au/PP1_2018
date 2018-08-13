// setup DB connection
const Sequelize = require('sequelize');
const keys = require('../config/keys');
const sequelize = new Sequelize(keys.dbString);

//establishes the connection and creates the db models for sequelize.
const initialize = function(){
    
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
}

module.exports = {sequelize, initialize};