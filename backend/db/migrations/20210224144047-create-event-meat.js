'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EventMeats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      meatId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:"Meats"},
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
    return queryInterface.dropTable('EventMeats');
  }
};