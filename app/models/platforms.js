'use strict';
module.exports = (sequelize, DataTypes) => {
  var platforms = sequelize.define('platforms', {
    title: DataTypes.STRING
  }, {});
  platforms.associate = function(models) {
    platforms.hasMany(models.platformIds, {foreignKey: 'platformId'});
  };
  return platforms;
};