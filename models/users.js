'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    email: DataTypes.STRING,
    displayName: DataTypes.STRING,
    regionId: DataTypes.INTEGER,
    localeId: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    bio: DataTypes.STRING,
    finishedRegistration: DataTypes.BOOLEAN
  }, {});
  users.associate = function(models) {
    //matching factors
    users.hasMany(models.responses, {foriegnKey: 'userId'})
    users.hasMany(models.prefGames, {foriegnKey: 'userId'})
    users.hasMany(models.matches, {foriegnKey: 'userId'})

    //user qualities
    users.hasOne(models.locale, {foreignKey:'localeId'})
    users.hasOne(models.region, {foreignKey:'regionId'})

    //auth method
    users.belongsTo(models.discordUser, {foriegnKey: 'userId'})
    users.belongsTo(models.googleUser, {foriegnKey: 'userId'})
    users.belongsTo(models.facebookUser, {foriegnKey: 'userId'})
  };
  return users;
};