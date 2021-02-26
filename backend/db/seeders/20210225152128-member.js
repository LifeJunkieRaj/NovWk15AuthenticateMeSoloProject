'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Members', [
      {    
        userId: 5,
        groupId: 2,
        organizer: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {    
        userId: 4,
        groupId: 1,
        organizer: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {    
        userId: 6,
        groupId: 3,
        organizer: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Members', null, {});
  }
};
