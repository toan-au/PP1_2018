'use strict';
module.exports = (sequelize, DataTypes) => {
  var usersMatches = sequelize.define('usersMatches', {
    userId: DataTypes.INTEGER,
    matchId: DataTypes.INTEGER,
    matchingId: DataTypes.INTEGER
  }, {});
  usersMatches.associate = function(models) {
    // associations can be defined here
  };
  return usersMatches;
};