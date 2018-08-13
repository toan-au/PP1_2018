const Sequelize = require('sequelize');

('use strict');
module.exports = function(sequelize, DataTypes) {
  const Users = sequelize.define(
    'users',
    {
      user_id: { type: Sequelize.INTEGER, primaryKey: true },
      email: { type: Sequelize.STRING, isEmail: true, len: [0, 100] },
      display_name: { type: Sequelize.STRING, len: [1, 30] },
      dob: Sequelize.DATE,
      language: Sequelize.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return Users;
};
