'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    googleId: DataTypes.STRING,
    email: DataTypes.STRING,
    displayName: DataTypes.STRING,
    regionId: DataTypes.INTEGER,
    localeId: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    bio: DataTypes.STRING,
    firstTime: DataTypes.BOOLEAN
  }, {});
  users.associate = function(models) {
    users.hasMany(models.responses, {foriegnKey: 'userId'})
    users.hasMany(models.prefGames, {foriegnKey: 'userId'})
    users.hasOne(models.locale, {foreignKey:'localeId'})
    users.hasOne(models.region, {foreignKey:'regionId'})
    users.belongsToMany(models.matches, {through: 'usersMatches'}, {foriegnKey: 'userId'},)
    users.belongsToMany(models.matches, {through: 'usersMatches'}, {foriegnKey: 'matchId'})
  };
  return users;
};