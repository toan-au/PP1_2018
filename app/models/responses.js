'use strict';

module.exports = (sequelize, DataTypes) => {
  const responses = sequelize.define(
    'responses',
    {
      userId: DataTypes.INTEGER,
      questionId: DataTypes.INTEGER,
      response: DataTypes.STRING,
      importance: DataTypes.INTEGER,
      preference: DataTypes.STRING
    },
    {}
  );
  responses.associate = function(models) {
    responses.belongsTo(models.users, { foriegnKey: 'userId' });
    responses.belongsTo(models.questions, { foreignKey: 'questionId' });
  };
  return responses;
};
