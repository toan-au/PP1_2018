'use strict';

module.exports = (sequelize, DataTypes) => {

  var responses = sequelize.define('responses', {
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    response: { type: DataTypes.STRING,  validate: {isAlpha: true, notEmpty: true, isIn: [['A', 'B', 'C', 'D']]}},
    importance: { type: DataTypes.INTEGER, validate: { min: 0, max: 3 }},
    preference: {type: DataTypes.STRING,  validate: {isAlpha: true, notEmpty: true, len:[1,4]}}
  }, {});

  responses.associate = function(models) {
    responses.belongsTo(models.users, { foriegnKey: 'userId' });
    responses.belongsTo(models.questions, { foreignKey: 'questionId' });
  };
  return responses;
};
