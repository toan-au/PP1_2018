'use strict';
module.exports = (sequelize, DataTypes) => {
  var discordUsers = sequelize.define(
    'discordUsers',
    {
      discordId: { type: DataTypes.STRING, primaryKey: true }
    },
    {}
  );
  discordUsers.associate = function(models) {
    discordUsers.belongsTo(models.users);
  };
  return discordUsers;
};
