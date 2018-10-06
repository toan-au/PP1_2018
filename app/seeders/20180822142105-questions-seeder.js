'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('questions', 
      [{
        questionText: 'If you were playing an MMO, what is your preferred role?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionText: 'I would prefer to play with...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionText: 'I am someone who...?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionText: 'You are playing a puzzle game and you are stuck. You...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionText: 'What aspect of a game is the most important to you?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionText: 'A teammate steals your kill. You...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionText: 'What word best describes you?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionText: 'How long do you want this friendship to last?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionText: 'Which is the better activity?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionText: 'On average, how many hours a day do you play video games?',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('questions', null, {})
  }
};
