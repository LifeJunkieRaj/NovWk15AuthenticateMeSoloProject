'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cuisine = sequelize.define('Cuisine', {
    cuisineType: DataTypes.STRING
  }, {});
  Cuisine.associate = function(models) {
    // associations can be defined here
     const columnMappingEventCuisine = {
      through: 'EventCuisine',
      otherKey: 'eventId',
      foreignKey: 'cuisineId',
    };
    Cuisine.belongsToMany(models.Event, columnMappingEventCuisine);
  };
  return Cuisine;
};