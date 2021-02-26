'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Groups', [
      {
      titleName: 'Pinellas Food Porn Stars',
      groupImage: '',
      location: 'Largo',
      groupVisibility: "public",
      description: 'Just a bunch of folks from the dirty down south that are lovers of food in central pinellas county!',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        titleName: 'Clearwater Carnivores',
        groupImage: '',
        location: 'Clearwater Beach',
        groupVisibility: "public",
        description: 'Meat, meat and more meat... Yep that about describes our favorite and most often eaten food type.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titleName: 'Dunedin Society of Gastronomy and Haute Cuisine',
        groupImage: '',
        location: 'Dunedin',
        groupVisibility: "private",
        description: 'We love food and Haute Cuisine with a passion and only the truest food lovers are admitted entry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
    ],{})
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Groups', null, {});    
  }
};
