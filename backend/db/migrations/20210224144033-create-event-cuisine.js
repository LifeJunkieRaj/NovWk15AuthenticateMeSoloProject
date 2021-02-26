'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EventCuisines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cuisineId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:"Cuisines"},
      },
      eventId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:"Events"},
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EventCuisines');
  }
};