'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'bio', 
    { type: Sequelize.STRING(1000),
    allowNull:false,
    defaultValue: '' });
},

down: (queryInterface, Sequelize) => {
   return queryInterface.changeColumn('users', 'bio', 
   { 
    type: Sequelize.STRING});
}
};
