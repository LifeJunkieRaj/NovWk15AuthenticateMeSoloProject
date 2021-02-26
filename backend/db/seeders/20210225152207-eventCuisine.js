'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('EventCuisines', [
    {
      cuisineId: 1,
      eventId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        cuisineId: 2,
      eventId: 2,
      createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineId: 3,
      eventId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        cuisineId: 4,
      eventId: 2,
      createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineId: 6,
      eventId: 2,
      createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineId: 1,
      eventId: 1,
      createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineId: 2,
      eventId: 1,
      createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineId: 3,
      eventId: 1,
      createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineId: 4,
      eventId: 1,
      createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineId: 1,
      eventId: 3,
      createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineId: 2,
      eventId: 3,
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('EventCuisines', null, {});
    
  }
};
