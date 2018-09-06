'use strict';
module.exports = (sequelize, DataTypes) => {
  var googleUsers = sequelize.define(
    'googleUsers',
    {
      googleId: { type: DataTypes.STRING, primaryKey: true }
    },
    {}
  );
  googleUsers.associate = function(models) {
    googleUsers.belongsTo(models.users);
  };
  return googleUsers;
};
