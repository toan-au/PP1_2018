'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('importance', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imp1: {
        type: Sequelize.INTEGER
      },
      imp2: {
        type: Sequelize.INTEGER
      },
      imp3: {
        type: Sequelize.INTEGER
      },
      imp4: {
        type: Sequelize.INTEGER
      },
      imp5: {
        type: Sequelize.INTEGER
      },
      imp6: {
        type: Sequelize.INTEGER
      },
      imp7: {
        type: Sequelize.INTEGER
      },
      imp8: {
        type: Sequelize.INTEGER
      },
      imp9: {
        type: Sequelize.INTEGER
      },
      imp10: {
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
    return queryInterface.dropTable('importance');
  }
};