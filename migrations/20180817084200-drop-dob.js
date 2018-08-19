'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('users', 'dob');
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('users', 'dob', Sequelize.DATE);
  }
};
