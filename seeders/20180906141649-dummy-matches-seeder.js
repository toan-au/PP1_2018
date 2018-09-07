'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('matches', 
      [{"userId":1,"matchId":5,"userResponse":"L","matchResponse":"P","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":28,"userResponse":"L","matchResponse":"P","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":91,"userResponse":"L","matchResponse":"P","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":94,"userResponse":"L","matchResponse":"P","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":112,"userResponse":"L","matchResponse":"P","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":119,"userResponse":"L","matchResponse":"P","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":128,"userResponse":"L","matchResponse":"P","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":131,"userResponse":"L","matchResponse":"P","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":159,"userResponse":"L","matchResponse":"P","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":166,"userResponse":"L","matchResponse":"P","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":190,"userResponse":"L","matchResponse":"L","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":195,"userResponse":"L","matchResponse":"L","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":202,"userResponse":"L","matchResponse":"L","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":280,"userResponse":"L","matchResponse":"L","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":438,"userResponse":"L","matchResponse":"L","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":442,"userResponse":"L","matchResponse":"L","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":507,"userResponse":"L","matchResponse":"L","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":574,"userResponse":"L","matchResponse":"L","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":577,"userResponse":"L","matchResponse":"L","createdAt":new Date(),"updatedAt":new Date()},
      {"userId":1,"matchId":633,"userResponse":"L","matchResponse":"L","createdAt":new Date(),"updatedAt":new Date()}], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('matches', null, {});
  }
};
