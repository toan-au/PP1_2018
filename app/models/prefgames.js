'use strict';

module.exports = (sequelize, DataTypes) => {
  const prefGames = sequelize.define(
    'prefGames',
    {
      userId: DataTypes.INTEGER,
      gameId: DataTypes.STRING
    },
    {}
  );
  prefGames.associate = function(models) {
    prefGames.belongsTo(models.users, { foreignKey: 'userId' });
    prefGames.belongsTo(models.games, { foreignKey: 'gameId' });
  };
  return prefGames;
};
