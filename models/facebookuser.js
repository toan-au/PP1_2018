'use strict';
module.exports = (sequelize, DataTypes) => {
  var facebookUsers = sequelize.define('facebookUsers', {
    facebookId: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  facebookUsers.associate = function(models) {
    facebookUsers.hasOne(models.users, {foreignKey:'userId'})
  };
  return facebookUsers;
};