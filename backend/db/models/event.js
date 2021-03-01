'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    groupId: DataTypes.INTEGER,
    eventDetails: DataTypes.STRING,
    eventImage: DataTypes.STRING,
    location: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    dateAndTime: DataTypes.DATE,
    phoneNumber: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    const columnMappingUser= {
      through: 'Comment',
      otherKey: 'userId',
      foreignKey: 'eventId',
    };
    Event.belongsToMany(models.User, columnMappingUser);
    const columnMappingEventCuisine = {
      through: 'EventCuisine',
      otherKey: 'cuisineId',
      foreignKey: 'eventId',
    };
    Event.belongsToMany(models.Cuisine, columnMappingEventCuisine);
    const columnMappingEventMeat = {
      through: 'EventMeat',
      otherKey: 'meatId',
      foreignKey: 'eventId',
    };
    Event.belongsToMany(models.Meat, columnMappingEventMeat);
    const columnMappingUser1= {
      through: 'Attendee',
      otherKey: 'userId',
      foreignKey: 'eventId',
    };
    Event.belongsToMany(models.User, columnMappingUser1);
    Event.hasMany(models.Comment, {foreignKey: "eventId"})
    Event.belongsTo(models.Group,{foreignKey:{name:'groupId'}})
  };
  return Event;
};