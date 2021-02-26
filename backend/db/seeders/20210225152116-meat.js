'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Meats', [
      {
        meatName: 'Beef',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        meatName: 'Chicken',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        meatName: 'Seafood',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        meatName: 'Pork',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        meatName: 'Bacon',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        meatName: 'Poultry',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        meatName: 'Game Meat',
        createdAt: new Date(),
        updatedAt: new Date(),      
      },

      ], {});
  },

  down: async (queryInterface, Sequelize) => {
   return await queryInterface.bulkDelete('Meats', null, {});
    
  }
};
