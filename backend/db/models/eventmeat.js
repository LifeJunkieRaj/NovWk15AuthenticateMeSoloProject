'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventMeat = sequelize.define('EventMeat', {
    meatId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  EventMeat.associate = function(models) {
    // associations can be defined here
    EventMeat.belongsTo(models.Meat, {foreignKey: "meatId"});
    EventMeat.belongsTo(models.Event, {foreignKey: "eventId"});
    
  };
  return EventMeat;
};