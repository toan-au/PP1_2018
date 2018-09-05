'use strict';
module.exports = (sequelize, DataTypes) => {
  var facebookUser = sequelize.define('facebookUser', {
    facebookId: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  facebookUser.associate = function(models) {
    discordUser.hasOne(models.users, {foreignKey:'userId'})
  };
  return facebookUser;
};