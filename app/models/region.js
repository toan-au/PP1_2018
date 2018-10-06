'use strict';

module.exports = (sequelize, DataTypes) => {
  const region = sequelize.define(
    'region',
    {
      region: DataTypes.STRING
    },
    {}
  );
  region.associate = function(models) {
    region.hasMany(models.users);
  };
  return region;
};
