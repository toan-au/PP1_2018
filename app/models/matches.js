'use strict';

module.exports = (sequelize, DataTypes) => {
  var matches = sequelize.define('matches', {
    userId: DataTypes.INTEGER,
    matchId: DataTypes.INTEGER,
    userResponse: { type: DataTypes.STRING,  validate: {isIn: [['L', 'D']]}},
    matchResponse: { type: DataTypes.STRING,  validate: {isIn: [['L', 'D', 'P']]}}
  }, {});

  matches.associate = function(models) {
    matches.belongsTo(models.users, { foriegnKey: 'userId' });
  };
  return matches;
};
