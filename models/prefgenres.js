'use strict';
module.exports = (sequelize, DataTypes) => {
  var prefGenres = sequelize.define('prefGenres', {
    userId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {});
  prefGenres.associate = function(models) {
    prefGenres.belongsTo(models.users, {foreignKey: 'userId'})
    prefGenres.belongsTo(models.genres, {foreignKey: 'genreId'})
  };
  return prefGenres;
};