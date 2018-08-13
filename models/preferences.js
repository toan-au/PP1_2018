'use strict';
module.exports = (sequelize, DataTypes) => {
  var preferences = sequelize.define('preferences', {
    question_1_pref: DataTypes.STRING,
    question_1_importance: DataTypes.INTEGER,
    question_2_pref: DataTypes.STRING,
    question_2_importance: DataTypes.INTEGER,
    question_3_pref: DataTypes.STRING,
    question_3_importance: DataTypes.INTEGER,
    question_4_pref: DataTypes.STRING,
    question_4_importance: DataTypes.INTEGER,
    question_5_pref: DataTypes.STRING,
    question_5_importance: DataTypes.INTEGER,
    question_6_pref: DataTypes.STRING,
    question_6_importance: DataTypes.INTEGER
  }, {});
  preferences.associate = function(models) {
    preferences.belongsTo(users);
  };
  return preferences;
};