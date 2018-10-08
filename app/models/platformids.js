'use strict';

module.exports = (sequelize, DataTypes) => {
  const platformIds = sequelize.define(
    'platformIds',
    {
      userId: DataTypes.INTEGER,
      platformId: DataTypes.INTEGER,
      platformDisplayName: {type: DataTypes.STRING, validate: {notEmpty: true, isAlphanumeric: true}}
    },
    {}
  );
  platformIds.associate = function(models) {
    platformIds.belongsTo(models.users, { foreignKey: 'userId' });
    platformIds.belongsTo(models.platforms, { foreignKey: 'platformId' });
  };
  return platformIds;
};
