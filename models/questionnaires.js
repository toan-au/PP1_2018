'use strict';
module.exports = (sequelize, DataTypes) => {
  var questionnaires = sequelize.define('questionnaires', {
    uId: DataTypes.INTEGER,
    question1: DataTypes.STRING,
    question2: DataTypes.STRING,
    question3: DataTypes.STRING,
    question4: DataTypes.STRING,
    question5: DataTypes.STRING,
    question6: DataTypes.STRING,
    question7: DataTypes.STRING,
    question8: DataTypes.STRING,
    question9: DataTypes.STRING,
    question10: DataTypes.STRING
  }, {});
  questionnaires.associate = function(models) {
    questionnaires.belongsTo(models.users);
    questionnaires.hasOne(models.preferences);
    questionnaires.hasOne(models.importance);
  };
  return questionnaires;
};