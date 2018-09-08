'use strict';
module.exports = (sequelize, DataTypes) => {
  var region = sequelize.define(
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
