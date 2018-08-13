'use strict';
module.exports = (sequelize, DataTypes) => {
  var matches = sequelize.define('matches', {
    user_id: DataTypes.INTEGER,
    match_id: DataTypes.INTEGER
  }, {});
  matches.associate = function(models) {
    matches.belongsToMany(users);
  };
  return matches;
};