'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usersMatches');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usersMatches', { id: Sequelize.INTEGER });
  }
};
