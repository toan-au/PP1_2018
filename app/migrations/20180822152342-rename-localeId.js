'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'locale', 'localeId');
},

down: (queryInterface, Sequelize) => {
  return queryInterface.renameColumn('users', 'localeId', 'locale');
} 
};
