'use strict';
module.exports = (sequelize, DataTypes) => {
  var googleUser = sequelize.define('googleUser', {
    googleId: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  googleUser.associate = function(models) {
    discordUser.hasOne(models.users, {foreignKey:'userId'})
  };
  return googleUser;
};