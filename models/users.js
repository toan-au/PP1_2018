'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define(
    'users',
    {
      googleId: DataTypes.STRING,
      email: DataTypes.STRING,
      displayName: DataTypes.STRING,
      dob: DataTypes.DATE,
      language: DataTypes.STRING
    },
    {}
  );
  users.associate = function(models) {
    // associations go here
  };
  return users;
};
