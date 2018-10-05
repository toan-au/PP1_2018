'use strict';

module.exports = (sequelize, DataTypes) => {
  const platforms = sequelize.define(
    'platforms',
    {
      title: DataTypes.STRING
    },
    {}
  );
  platforms.associate = function(models) {
    platforms.hasMany(models.platformIds, { foreignKey: 'platformId' });
  };
  return platforms;
};
