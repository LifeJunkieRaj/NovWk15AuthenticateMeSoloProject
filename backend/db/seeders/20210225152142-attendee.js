'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Attendees', [
    {    
      userId: 6,
      eventId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {    
      userId: 5,
      eventId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {    
      userId: 4,
      eventId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },       
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Attendees', null, {});
    
  }
};
