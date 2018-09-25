'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      googleId: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      displayName: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.INTEGER
      },
      locale: {
        type: Sequelize.INTEGER
      },
      age: {
        type: Sequelize.INTEGER
      },
      bio: {
        type: Sequelize.STRING
      },
      firstTime: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('users');
  }
};