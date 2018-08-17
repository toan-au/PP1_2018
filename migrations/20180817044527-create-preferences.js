'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('preferences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pref1: {
        type: Sequelize.STRING
      },
      pref2: {
        type: Sequelize.STRING
      },
      pref3: {
        type: Sequelize.STRING
      },
      pref4: {
        type: Sequelize.STRING
      },
      pref5: {
        type: Sequelize.STRING
      },
      pref6: {
        type: Sequelize.STRING
      },
      pref7: {
        type: Sequelize.STRING
      },
      pref8: {
        type: Sequelize.STRING
      },
      pref9: {
        type: Sequelize.STRING
      },
      pref10: {
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
    return queryInterface.dropTable('preferences');
  }
};