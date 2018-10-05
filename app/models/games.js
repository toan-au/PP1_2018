'use strict';

module.exports = (sequelize, DataTypes) => {
  const games = sequelize.define(
    'games',
    {
      title: DataTypes.STRING
    },
    {}
  );
  games.associate = function(models) {
    games.hasMany(models.prefGames, { foriegnKey: 'gameId' });
  };
  return games;
};
