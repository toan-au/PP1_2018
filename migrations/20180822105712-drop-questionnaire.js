'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('questionnaires');  
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questionnaires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question1: {
        type: Sequelize.STRING
      },
      question2: {
        type: Sequelize.STRING
      },
      question3: {
        type: Sequelize.STRING
      },
      question4: {
        type: Sequelize.STRING
      },
      question5: {
        type: Sequelize.STRING
      },
      question6: {
        type: Sequelize.STRING
      },
      question7: {
        type: Sequelize.STRING
      },
      question8: {
        type: Sequelize.STRING
      },
      question9: {
        type: Sequelize.STRING
      },
      question10: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  }
};
