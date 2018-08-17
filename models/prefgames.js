'use strict';
module.exports = (sequelize, DataTypes) => {
  var prefGames = sequelize.define('prefGames', {
    userId: DataTypes.INTEGER,
    gameId: DataTypes.STRING
  }, {});
  prefGames.associate = function(models) {
    prefGames.belongsTo(models.users)
  };
  return prefGames;
};