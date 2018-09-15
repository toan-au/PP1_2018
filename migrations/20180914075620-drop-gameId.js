'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('prefGames', 'gameId');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('prefGames', 'gameId', Sequelize.STRING);
  }
};
