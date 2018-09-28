'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'googleId');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'googleId', Sequelize.STRING);
  }
};
