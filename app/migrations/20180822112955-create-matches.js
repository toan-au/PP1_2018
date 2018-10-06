'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('matches', {
      userId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      matchId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      userResponse: {
        type: Sequelize.STRING
      },
      matchResponse: {
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
    return queryInterface.dropTable('matches');
  }
};