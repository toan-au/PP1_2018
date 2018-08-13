'use strict';
module.exports = (sequelize, DataTypes) => {
  var questionnaires = sequelize.define('questionnaires', {
    question_1: DataTypes.STRING,
    question_2: DataTypes.STRING,
    question_3: DataTypes.STRING,
    question_4: DataTypes.STRING,
    question_5: DataTypes.STRING,
    question_6: DataTypes.STRING
  }, {});
  questionnaires.associate = function(models) {
    questionnaires.belongsTo(users);
  };
  return questionnaires;
};