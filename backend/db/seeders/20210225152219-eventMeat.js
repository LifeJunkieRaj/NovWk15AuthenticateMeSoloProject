'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EventMeats', [
      {
        meatId: 1,
        eventId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        meatId: 2,
        eventId: 2,
        createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        meatId: 3,
        eventId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        meatId: 4,
        eventId: 2,
        createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        meatId: 6,
        eventId: 2,
        createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        meatId: 1,
        eventId: 1,
        createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        meatId: 2,
        eventId: 1,
        createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        meatId: 3,
        eventId: 1,
        createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        meatId: 4,
        eventId: 1,
        createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        meatId: 1,
        eventId: 3,
        createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        meatId: 2,
        eventId: 3,
        createdAt: new Date(),
          updatedAt: new Date(),
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('EventMeats', null, {});
    
  }
};
