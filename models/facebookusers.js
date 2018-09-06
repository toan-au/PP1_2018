'use strict';
module.exports = (sequelize, DataTypes) => {
  var facebookUsers = sequelize.define(
    'facebookUsers',
    {
      facebookId: DataTypes.STRING
    },
    {}
  );
  facebookUsers.associate = function(models) {
    facebookUsers.belongsTo(models.users);
  };
  return facebookUsers;
};
