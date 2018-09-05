'use strict';
module.exports = (sequelize, DataTypes) => {
  var discordUser = sequelize.define('discordUser', {
    discordId: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  discordUser.associate = function(models) {
    discordUser.hasOne(models.users, {foreignKey:'userId'})
  };
  return discordUser;
};