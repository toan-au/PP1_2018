'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'firstTime', 
    { type: Sequelize.BOOLEAN,
    allowNull:false,
    defaultValue: true });
},

down: (queryInterface, Sequelize) => {
   return queryInterface.changeColumn('users', 'firstTime', 
   { 
    type: Sequelize.BOOLEAN});
  }
};
