'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'pfpUrl', 
    { type: Sequelize.STRING,
    allowNull:false,
    defaultValue: '' });
},

down: (queryInterface, Sequelize) => {
   return queryInterface.changeColumn('users', 'pfpUrl', 
   { 
    type: Sequelize.STRING});
}
};
