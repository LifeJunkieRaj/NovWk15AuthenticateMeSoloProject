'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Events', [
     {
        groupId: 1,
        eventDetails: 'Lining up for BJs',
        eventImage: '',
        location: 'BJs Restaurant & Brewhouse in Clearwater, FL',
        price: 50,
        dateAndTime: new Date(),
        phoneNumber: 1002200114,
        createdAt: new Date(),
        updatedAt: new Date(),
     },
     {
      groupId: 3,
      eventDetails: 'Who Wanna have fun at Thai Nana?',
      eventImage: '',
      location: 'Thai Nana Restaurant Palm Harbor, FL',
      price: 65,
      dateAndTime: new Date(),
      phoneNumber: 1002200115,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      groupId: 2,
      eventDetails: 'All you can Chew at the Churrascaria!',
      eventImage: '',
      location: 'Terra Guacha Brazilian Steakhouse Tampa, FL',
      price: 100,
      dateAndTime: new Date(),
      phoneNumber: 1002200116,
      createdAt: new Date(),
      updatedAt: new Date(),
     },
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Events', null, {});
    
  }
};
