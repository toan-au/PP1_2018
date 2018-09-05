'use strict';
module.exports = (sequelize, DataTypes) => {
  var questions = sequelize.define(
    'questions',
    {
      questionText: DataTypes.STRING
    },
    {}
  );
  questions.associate = function(models) {
    questions.hasMany(models.responses, { foriegnKey: 'questionId' });
    questions.hasMany(models.answers, { foriegnKey: 'questionId' });
  };
  return questions;
};
