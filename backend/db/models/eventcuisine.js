'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventCuisine = sequelize.define('EventCuisine', {
    cuisineId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  EventCuisine.associate = function(models) {
    // associations can be defined here
    EventCuisine.belongsTo(models.Cuisine, {foreignKey:"cuisineId"});
    EventCuisine.belongsTo(models.Event, {foreignKey:"eventId"})
  };
  return EventCuisine;
};