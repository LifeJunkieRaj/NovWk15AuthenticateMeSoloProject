'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cuisines', [
      {
        cuisineType: 'Steak',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'BBQ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Korean BBQ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Chinese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Mexican',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Bar & Grill',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Brazilian Steakhouse',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Greek',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Indian',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Jamaican',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Sushi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Italian',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Vietnamese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Thai',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Hibachi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'American Classic Grill',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Hamburgers & Hot Dogs',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Irish',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'French',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Spanish',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cuisineType: 'Breakfast',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Cuisines', null, {});
  }
};
