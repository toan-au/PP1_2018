'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define(
    'users',
    {
      email: DataTypes.STRING,
      display_name: DataTypes.STRING,
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
