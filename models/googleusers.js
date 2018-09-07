'use strict';
module.exports = (sequelize, DataTypes) => {
  var googleUsers = sequelize.define(
    'googleUsers',
    {
      googleId: { type: DataTypes.STRING, primaryKey: true },
      userId: DataTypes.STRING
    },
    {}
  );
  googleUsers.associate = function(models) {
    googleUsers.belongsTo(models.users, {
      foreignKey: {
        field: 'userId',
        allowNull: false
      },
      onDelete: 'cascade'
    });
  };
  return googleUsers;
};
