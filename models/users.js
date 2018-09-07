'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define(
    'users',
    {
      email: DataTypes.STRING,
      displayName: DataTypes.STRING,
      regionId: DataTypes.INTEGER,
      localeId: DataTypes.INTEGER,
      age: DataTypes.INTEGER,
      bio: DataTypes.STRING,
      finishedRegistration: DataTypes.BOOLEAN,
      pfpUrl: DataTypes.STRING
    },
    {}
  );
  users.associate = function(models) {
    //matching factors
    users.hasMany(models.responses, { foriegnKey: 'userId' });
    users.hasMany(models.prefGames, { foriegnKey: 'userId' });
    users.hasMany(models.matches, { foriegnKey: 'userId' });

    //user qualities
    users.belongsTo(models.locale, { foreignKey: 'localeId' });
    users.belongsTo(models.region, { foreignKey: 'regionId' });
  };
  return users;
};
