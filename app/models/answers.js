'use strict';

module.exports = (sequelize, DataTypes) => {
  const answers = sequelize.define(
    'answers',
    {
      questionId: DataTypes.INTEGER,
      answerText: DataTypes.STRING,
      answerKey: DataTypes.STRING
    },
    {}
  );
  answers.associate = function(models) {
    answers.belongsTo(models.questions, { foriegnKey: 'questionId' });
  };
  return answers;
};
