'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questionnaires', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question_1: {
        type: Sequelize.STRING
      },
      question_2: {
        type: Sequelize.STRING
      },
      question_3: {
        type: Sequelize.STRING
      },
      question_4: {
        type: Sequelize.STRING
      },
      question_5: {
        type: Sequelize.STRING
      },
      question_6: {
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
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('questionnaires');
  }
};