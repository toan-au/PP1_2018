'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('locales', 
      [{
        locale: 'en',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        locale: 'es',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        locale: 'zh',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        locale: 'ja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        locale: 'vi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('locales', null, {});
  }
};
