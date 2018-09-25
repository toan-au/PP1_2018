'use strict';
module.exports = (sequelize, DataTypes) => {
  var platformIds = sequelize.define('platformIds', {
    userId: DataTypes.INTEGER,
    platformId: DataTypes.INTEGER,
    platformDisplayName: DataTypes.STRING
  }, {});
  platformIds.associate = function(models) {
    platformIds.belongsTo(models.users, {foreignKey: 'userId'});
    platformIds.belongsTo(models.platforms, {foreignKey: 'platformId'});
  };
  return platformIds;
};