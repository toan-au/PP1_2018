'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usersMatches', {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      matchId: {
        type: Sequelize.INTEGER
      },
      matchingId: {
        type: Sequelize.INTEGER,
        primaryKey: true
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
    return queryInterface.dropTable('usersMatches');
  }
};