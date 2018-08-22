'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.renameColumn('users', 'region', 'regionId');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'regionId', 'region');
  }
};
