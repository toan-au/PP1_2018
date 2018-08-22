'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('answers', 
      [{
        questionId: 1,
        answerText: 'Tank',
        answerKey: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 1,
        answerText: 'DPS',
        answerKey: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 1,
        answerText: 'Support',
        answerKey: 'C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 1,
        answerText: 'Hybrid/Other',
        answerKey: 'D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 2,
        answerText: 'They must be from my region',
        answerKey: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 2,
        answerText: 'They can be from surrounding areas',
        answerKey: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 2,
        answerText: 'They can be from anywhere region',
        answerKey: 'C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 2,
        answerText: 'I want to game by myself',
        answerKey: 'D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 3,
        answerText: 'Uses profanities all the time',
        answerKey: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 3,
        answerText: 'Uses profanities often',
        answerKey: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 3,
        answerText: 'Rarely uses profanities',
        answerKey: 'C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 3,
        answerText: 'Never uses profanities',
        answerKey: 'D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 4,
        answerText: 'Try to solve the puzzle with trial and error',
        answerKey: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 4,
        answerText: 'Sit and think thoroughly about a solution',
        answerKey: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 4,
        answerText: 'Quit the game',
        answerKey: 'C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 4,
        answerText: 'Search for an answer on the internet',
        answerKey: 'D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 5,
        answerText: 'Story',
        answerKey: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 5,
        answerText: 'Gameplay',
        answerKey: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 5,
        answerText: 'Art',
        answerKey: 'C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 5,
        answerText: 'Social',
        answerKey: 'D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 6,
        answerText: 'BM them',
        answerKey: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 6,
        answerText: 'Cheer them on',
        answerKey: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 6,
        answerText: 'Steal their kill',
        answerKey: 'C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 6,
        answerText: 'Quit the game',
        answerKey: 'D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 7,
        answerText: 'Chill',
        answerKey: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 7,
        answerText: 'Quiet',
        answerKey: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 7,
        answerText: 'Agressive',
        answerKey: 'C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 7,
        answerText: 'Energetic',
        answerKey: 'D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 8,
        answerText: 'One day',
        answerKey: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 8,
        answerText: 'A few months to a year',
        answerKey: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 8,
        answerText: 'Several years',
        answerKey: 'C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 8,
        answerText: 'Forever',
        answerKey: 'D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 9,
        answerText: 'Playing a multiplayer game with your friends online',
        answerKey: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 9,
        answerText: 'Playing a multiplayer game with your friends locally',
        answerKey: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 9,
        answerText: 'Being engrossed in a game by yourself',
        answerKey: 'C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 9,
        answerText: 'Watching someone else play games',
        answerKey: 'D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 10,
        answerText: 'Less than an hour',
        answerKey: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 10,
        answerText: '2 to 5 hours',
        answerKey: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 10,
        answerText: '5 to 10 hours',
        answerKey: 'C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionId: 10,
        answerText: 'More than 10 hours',
        answerKey: 'D',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('answers', null, {});
  }
};
