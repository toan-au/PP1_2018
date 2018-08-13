const Sequelize = require('sequelize');

('use strict');
module.exports = function(sequelize, DataTypes) {
  const Questionnaires = sequelize.define(
    'questionnaires',
    {
      user_id: { type: Sequelize.INTEGER, primaryKey: true },
      question_1: Sequelize.STRING,
      question_2: Sequelize.STRING,
      question_3: Sequelize.STRING,
      question_4: Sequelize.STRING,
      question_5: Sequelize.STRING,
      question_6: Sequelize.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return Questionnaires;
};
