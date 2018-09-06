'use strict';
module.exports = (sequelize, DataTypes) => {
  var googleUsers = sequelize.define('googleUser', {
    googleId: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  googleUsers.associate = function(models) {
    googleUsers.hasOne(models.users, {foreignKey:'userId'})
  };
  return googleUsers;
};