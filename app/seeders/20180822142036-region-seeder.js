'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('regions', 
    [{
      region: 'NA',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      region: 'OCE',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      region: 'CN',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      region: 'JP',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      region: 'SEA',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('regions', null, {});
  }
};
