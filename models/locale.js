'use strict';
module.exports = (sequelize, DataTypes) => {
  var locale = sequelize.define('locale', {
    locale: DataTypes.STRING
  }, {});
  locale.associate = function(models) {
    locale.hasMany(models.users)
  };
  return locale;
};