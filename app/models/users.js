'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define(
    'users',
    {
      email: {type: DataTypes.STRING, validate: {isEmail: true}},
      displayName: DataTypes.STRING,
      regionId: DataTypes.INTEGER,
      localeId: DataTypes.INTEGER,
      age: DataTypes.INTEGER,
      bio: DataTypes.STRING(1000),
      finishedRegistration: DataTypes.BOOLEAN,
      pfpUrl: DataTypes.STRING,
      playstyle: { type: DataTypes.STRING,  validate: {isIn: [['casual', 'competitive']]}},
      avgRating: DataTypes.DECIMAL(10,2)
    },
    {}
  );
  users.associate = function(models) {
    //matching factors
    users.hasMany(models.responses, { foriegnKey: 'userId' });
    users.hasMany(models.prefGames, { foriegnKey: 'userId' });
    users.hasMany(models.matches, { foriegnKey: 'userId' });

    //Social Factors
    users.hasMany(models.prefGenres, { foriegnKey: 'userId' });
    users.hasMany(models.platformIds, {foreignKey: 'userId'});
    users.hasMany(models.ratings, {foreignKey: 'userId'})

    //user qualities
    users.belongsTo(models.locale, { foreignKey: 'localeId' });
    users.belongsTo(models.region, { foreignKey: 'regionId' });
  };
  return users;
};
