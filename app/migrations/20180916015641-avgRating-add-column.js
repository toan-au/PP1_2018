'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('users', 'avgRating', { type: Sequelize.DECIMAL(10, 2),
        allowNull:false,
        defaultValue: 5.00 });
  },
  
  down: (queryInterface, Sequelize) => {
    
    return queryInterface.removeColumn('users', 'avgRating');
    }
  };
  
