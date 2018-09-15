'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('genres',
      [{title: 'Action', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Fantasy', createdAt:new Date(),updatedAt:new Date()},
      {title: 'FPS', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Platformer', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Puzzle', createdAt:new Date(),updatedAt:new Date()},
      {title: 'RPG', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Shooters', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Arcade', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Roguelike', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Sandbox', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Management', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Simulation', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Co-operative', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Rhythm', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Indie', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Sports', createdAt:new Date(),updatedAt:new Date()},
      {title: 'MOBA', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Fighting', createdAt:new Date(),updatedAt:new Date()},
      {title: '4X', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Real Time Strategy', createdAt:new Date(),updatedAt:new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('genres', null, {});
  }
};
