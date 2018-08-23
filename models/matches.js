'use strict';
module.exports = (sequelize, DataTypes) => {
  var matches = sequelize.define('matches', {
    userResponse: DataTypes.STRING,
    matchResponse: DataTypes.STRING
  }, {});
  matches.associate = function(models) {
    matches.belongsToMany(models.users, {through: 'usersMatches'}, {foreignKey:'userId'});
    matches.belongsToMany(models.users, {through: 'usersMatches'}, {foreignKey:'matchId'});
  };
  return matches;
};