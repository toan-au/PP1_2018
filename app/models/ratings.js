'use strict';

module.exports = (sequelize, DataTypes) => {
  var ratings = sequelize.define('ratings', {
    userId: DataTypes.INTEGER,
    reviewerId: DataTypes.INTEGER,
    rating: { type: DataTypes.INTEGER, validate: { min: 0, max: 5 }},
  }, {});

  ratings.associate = function(models) {
    ratings.belongsTo(models.users, { foriegnKey: 'userId' });
  };
  return ratings;
};
