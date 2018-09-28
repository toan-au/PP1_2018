'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('responses', {
      userId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      questionId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      response: {
        type: Sequelize.STRING
      },
      importance: {
        type: Sequelize.INTEGER
      },
      preference: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('responses');
  }
};