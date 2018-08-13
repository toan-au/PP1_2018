const Sequelize = require('sequelize');

('use strict');
module.exports = function(sequelize, DataTypes) {
  const Matches = sequelize.define(
    'matches',
    {
      user_id: { type: Sequelize.INTEGER, primaryKey: true },
      match_id: Sequelize.INTEGER
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return Matches;
};
