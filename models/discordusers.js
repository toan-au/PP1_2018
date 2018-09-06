'use strict';
module.exports = (sequelize, DataTypes) => {
  var discordUsers = sequelize.define(
    'discordUsers',
    {
      discordId: DataTypes.STRING
    },
    {}
  );
  discordUsers.associate = function(models) {
    discordUsers.belongsTo(models.users);
  };
  return discordUsers;
};
