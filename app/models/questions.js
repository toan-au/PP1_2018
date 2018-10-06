'use strict';

module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define(
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
