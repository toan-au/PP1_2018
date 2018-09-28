'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('games', 
      [{title: 'Path of Exile', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Battlefield 1', createdAt:new Date(),updatedAt:new Date()},
      {title: 'War Thunder', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Overwatch', createdAt:new Date(),updatedAt:new Date()},
      {title: 'TERA', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Dragon Ball FighterZ', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Dark Souls 3', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Guild Wars 2', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Rocket League', createdAt:new Date(),updatedAt:new Date()},
      {title: 'ARK', createdAt:new Date(),updatedAt:new Date()},
      {title: 'World of Tanks', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Elite Dangerous', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Titanfall 2', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Tom Clancy\'s Rainbow Six Siege', createdAt:new Date(),updatedAt:new Date()},
      {title: 'PUBG', createdAt:new Date(),updatedAt:new Date()},
      {title: 'League of Legends', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Gwent', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Final Fantasy XIV', createdAt:new Date(),updatedAt:new Date()},
      {title: 'For Honor', createdAt:new Date(),updatedAt:new Date()},
      {title: 'No Man\'s Sky', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Fortnite', createdAt:new Date(),updatedAt:new Date()},
      {title: 'osu!', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Warframe', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Pokemon Go', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Dota 2', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Minecraft', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Black Desert Online', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Grand Theft Auto 5', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Starcraft 2', createdAt:new Date(),updatedAt:new Date()},
      {title: 'The Elder Scrolls Online', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Diablo 3', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Sea of Thieves', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Smite', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Destiny 2', createdAt:new Date(),updatedAt:new Date()},
      {title: 'World of Warcraft', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Persona 5', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Monster Hunter: World', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Don\'t Starve', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Counter Strike Global Offensive', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Payday 2', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Hearthstone', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Stardew Valley', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Subnautica', createdAt:new Date(),updatedAt:new Date()},
      {title: 'Civilization VI', createdAt:new Date(),updatedAt:new Date()}


    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('games', null, {});
  }
};
