'use strict';
module.exports = (sequelize, DataTypes) => {
  var pref_games = sequelize.define('pref_games', {
    record_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    game_id: DataTypes.STRING
  }, {});
  pref_games.associate = function(models) {
    pref_games.belongsTo(users);
  };
  return pref_games;
};