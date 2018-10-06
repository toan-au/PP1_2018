'use strict';

module.exports = (sequelize, DataTypes) => {
  const ratings = sequelize.define(
    'ratings',
    {
      userId: DataTypes.INTEGER,
      reviewerId: DataTypes.INTEGER,
      rating: DataTypes.INTEGER
    },
    {}
  );
  ratings.associate = function(models) {
    ratings.belongsTo(models.users, { foriegnKey: 'userId' });
  };
  return ratings;
};
