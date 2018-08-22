'use strict';
module.exports = (sequelize, DataTypes) => {
  var region = sequelize.define('region', {
    region: DataTypes.STRING
  }, {});
  region.associate = function(models) {
    region.belongsTo(models.users, {foreignKey:'regionId'})
  };
  return region;
};