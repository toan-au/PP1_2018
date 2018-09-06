'use strict';
module.exports = (sequelize, DataTypes) => {
  var googleUsers = sequelize.define(
    'googleUsers',
    {
      googleId: DataTypes.STRING
    },
    {}
  );
  googleUsers.associate = function(models) {
    googleUsers.belongsTo(models.users);
  };
  return googleUsers;
};
