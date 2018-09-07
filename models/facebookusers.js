'use strict';
module.exports = (sequelize, DataTypes) => {
  var facebookUsers = sequelize.define(
    'facebookUsers',
    {
      facebookId: { type: DataTypes.STRING, primaryKey: true }
    },
    {}
  );
  facebookUsers.associate = function(models) {
    facebookUsers.belongsTo(models.users);
  };
  return facebookUsers;
};
