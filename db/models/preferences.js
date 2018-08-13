const Sequelize = require('sequelize');

('use strict');
module.exports = function(sequelize, DataTypes) {
  const Preferences = sequelize.define(
    'preferences',
    {
      user_id: { type: Sequelize.INTEGER, primaryKey: true },
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
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return Preferences;
};
