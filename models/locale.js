'use strict';
module.exports = (sequelize, DataTypes) => {
  var locale = sequelize.define('locale', {
    locale: DataTypes.STRING
  }, {});
  locale.associate = function(models) {
    locale.belongsTo(models.users)
  };
  return locale;
};