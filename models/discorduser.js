'use strict';
module.exports = (sequelize, DataTypes) => {
  var discordUsers = sequelize.define('discordUsers', {
    discordId: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  discordUsers.associate = function(models) {
    discordUsers.hasOne(models.users, {foreignKey:'userId'})
  };
  return discordUsers;
};