const Sequelize = require('sequelize');

('use strict');
module.exports = function(sequelize, DataTypes) {
  const PrefGames = sequelize.define(
    'pref_games',
    {
      record_id: { type: Sequelize.INTEGER, primaryKey: true },
      user_id: Sequelize.INTEGER,
      game_id: Sequelize.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return PrefGames;
};
