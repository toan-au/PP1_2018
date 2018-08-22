'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    googleId: DataTypes.STRING,
    email: DataTypes.STRING,
    displayName: DataTypes.STRING,
    regionId: DataTypes.INTEGER,
    localeiD: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    bio: DataTypes.STRING,
    firstTime: DataTypes.BOOLEAN
  }, {});
  users.associate = function(models) {
    users.hasMany(models.responses, {foriegnKey: 'userId'})
    users.hasMany(models.prefGames, {foriegnKey: 'userId'})
    users.hasMany(models.matches, {foriegnKey: 'userId'})
    users.hasOne(models.locale, {foreignKey:'localeId'})
    users.hasOne(models.region, {foreignKey:'regionId'})
  };
  return users;
};