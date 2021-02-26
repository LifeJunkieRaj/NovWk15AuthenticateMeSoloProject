'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Comments', [
      {       
        userId: 6,
        eventId: 2,
        content: 'Thai food is spicy and has lots of exotic flavors that compliment each other well.  How boring.  I will not be going back.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
      userId: 5,
      eventId: 3,
      content: 'It was like a meat orgy.  I have never has so much amazing and succulent meat all in one place!',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {       
       userId: 4,
       eventId: 1,
       content: 'We were last in line but it was worth it for the BJ quality and service.  It was so good it sucked the life out of me.',
       createdAt: new Date(),
       updatedAt: new Date(),
      },
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   return await queryInterface.bulkDelete('Comments', null, {});
  
  }
};
