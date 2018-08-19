'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define(
    'users',
    {
      googleId: DataTypes.STRING,
      email: DataTypes.STRING,
      displayName: DataTypes.STRING,
      age: DataTypes.INTEGER,
      language: DataTypes.STRING,
      bio: DataTypes.STRING,
      firstTime: DataTypes.BOOLEAN
    },
    {}
  );
  users.associate = function(models) {
    users.hasMany(models.prefGames)
    users.hasOne(models.questionnaires)
  };
  return users;
};
