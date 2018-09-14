'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('platforms',
      [{title: 'Nintendo', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Origin', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Xbox', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Playstation', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Twitch', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Discord', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Steam', createdAt:new Date(),updatedAt:new Date()}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('platforms', null, {});
  }
};
