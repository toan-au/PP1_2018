'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('preferences', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question_1_pref: {
        type: Sequelize.STRING
      },
      question_1_importance: {
        type: Sequelize.INTEGER
      },
      question_2_pref: {
        type: Sequelize.STRING
      },
      question_2_importance: {
        type: Sequelize.INTEGER
      },
      question_3_pref: {
        type: Sequelize.STRING
      },
      question_3_importance: {
        type: Sequelize.INTEGER
      },
      question_4_pref: {
        type: Sequelize.STRING
      },
      question_4_importance: {
        type: Sequelize.INTEGER
      },
      question_5_pref: {
        type: Sequelize.STRING
      },
      question_5_importance: {
        type: Sequelize.INTEGER
      },
      question_6_pref: {
        type: Sequelize.STRING
      },
      question_6_importance: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('preferences');
  }
};