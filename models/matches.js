'use strict';
module.exports = (sequelize, DataTypes) => {
  var matches = sequelize.define('matches', {
    userId: DataTypes.INTEGER,
    matchId: DataTypes.INTEGER,
    userResponse: DataTypes.STRING,
    matchResponse: DataTypes.STRING
  }, {});
  matches.associate = function(models) {
    matches.belongsTo(models.users, {foriegnKey: 'userId'})
  };
  return matches;
};