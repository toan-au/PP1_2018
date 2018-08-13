'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    user_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    display_name: DataTypes.STRING,
    dob: DataTypes.DATE,
    language: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    users.hasMany(pref_games);
    users.hasOne(questionnaires);
    users.hasOne(preferences);
    user.hasMany(matches);
  };
  return users;
};