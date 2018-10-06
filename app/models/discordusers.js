'use strict';

module.exports = (sequelize, DataTypes) => {
  const discordUsers = sequelize.define(
    'discordUsers',
    {
      discordId: { type: DataTypes.STRING, primaryKey: true },
      userId: DataTypes.INTEGER
    },
    {}
  );
  discordUsers.associate = function(models) {
    discordUsers.belongsTo(models.users, {
      foreignKey: {
        field: 'userId',
        allowNull: false
      },
      onDelete: 'cascade'
    });
  };
  return discordUsers;
};
