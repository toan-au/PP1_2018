'use strict';
module.exports = (sequelize, DataTypes) => {
  var importance = sequelize.define('importance', {
    qId: DataTypes.INTEGER,
    imp1: DataTypes.INTEGER,
    imp2: DataTypes.INTEGER,
    imp3: DataTypes.INTEGER,
    imp4: DataTypes.INTEGER,
    imp5: DataTypes.INTEGER,
    imp6: DataTypes.INTEGER,
    imp7: DataTypes.INTEGER,
    imp8: DataTypes.INTEGER,
    imp9: DataTypes.INTEGER,
    imp10: DataTypes.INTEGER
  }, {});
  importance.associate = function(models) {
    preferences.belongsTo(models.questionnaires)
  };
  return importance;
};