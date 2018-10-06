'use strict';

module.exports = (sequelize, DataTypes) => {
  const facebookUsers = sequelize.define(
    'facebookUsers',
    {
      facebookId: { type: DataTypes.STRING, primaryKey: true },
      userId: DataTypes.INTEGER
    },
    {}
  );
  facebookUsers.associate = function(models) {
    facebookUsers.belongsTo(models.users, {
      foreignKey: {
        field: 'userId',
        allowNull: false
      },
      onDelete: 'cascade'
    });
  };
  return facebookUsers;
};
