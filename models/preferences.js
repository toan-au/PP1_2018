'use strict';
module.exports = (sequelize, DataTypes) => {
  var preferences = sequelize.define('preferences', {
    pref1: DataTypes.STRING,
    pref2: DataTypes.STRING,
    pref3: DataTypes.STRING,
    pref4: DataTypes.STRING,
    pref5: DataTypes.STRING,
    pref6: DataTypes.STRING,
    pref7: DataTypes.STRING,
    pref8: DataTypes.STRING,
    pref9: DataTypes.STRING,
    pref10: DataTypes.STRING
  }, {});
  preferences.associate = function(models) {
    preferences.belongsTo(models.questionnaires)
  };
  return preferences;
};