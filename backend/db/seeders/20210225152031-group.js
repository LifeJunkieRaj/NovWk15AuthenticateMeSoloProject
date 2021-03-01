'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Groups', [
      {
      titleName: 'Pinellas Food Porn Stars',
      groupImage: 'image2.jpg',
      location: 'Largo',
      groupVisibility: "public",
      description: 'Just a bunch of folks from the dirty down south that are lovers of food in central pinellas county!',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        titleName: 'Clearwater Carnivores',
        groupImage: 'image2.jpg',
        location: 'Clearwater Beach',
        groupVisibility: "public",
        description: 'Meat, meat and more meat... Yep that about describes our favorite and most often eaten food type.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titleName: 'Dunedin Society of Gastronomy and Haute Cuisine',
        groupImage: 'image2.jpg',
        location: 'Dunedin',
        groupVisibility: "private",
        description: 'We love food and Haute Cuisine with a passion and only the truest food lovers are admitted entry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titleName: 'Dunedin Seafoodies',
        groupImage: 'image2.jpg',
        location: 'Dunedin',
        groupVisibility: "public",
        description: 'When we see seafood, we eat it!!!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titleName: 'Poultry Pals',
        groupImage: 'image2.jpg',
        location: 'Largo',
        groupVisibility: "public",
        description: 'If it had wings and beak, then to eat it we seek',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titleName: 'Beef Fakes',
        groupImage: 'image2.jpg',
        location: 'Clearwater',
        groupVisibility: "public",
        description: 'If it looks like meat, smells like meat and taste like meat, it probably aint meat!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titleName: 'Deer Meat We Love You',
        groupImage: 'image2.jpg',
        location: 'Dunedin',
        groupVisibility: "public",
        description: 'Constantly on the search for all types of game meat and venison!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titleName: 'Chicken Chompers',
        groupImage: 'image2.jpg',
        location: 'Palm Harbor',
        groupVisibility: "private",
        description: 'If it didnt cluck, then we aint spending not even one buck!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titleName: 'The Gator Plates',
        groupImage: 'image2.jpg',
        location: 'St Petersburg',
        groupVisibility: "public",
        description: 'Our mouths should come with a sign, Gator Meat Only',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titleName: 'Comfort Food Kings',
        groupImage: 'image2.jpg',
        location: 'Clearwater',
        groupVisibility: "public",
        description: 'In constant search of food that is a warm hug to your mouth and soul!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    
    ],{})
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Groups', null, {});    
  }
};
