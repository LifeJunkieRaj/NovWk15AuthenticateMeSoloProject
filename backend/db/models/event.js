'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    groupId: DataTypes.INTEGER,
    eventDetails: DataTypes.STRING,
    eventImage: DataTypes.STRING,
    location: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    dateAndTime: DataTypes.DATE,
    eventImage: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsTo(models.Group, {foreignKey:{name:"groupId"}});
    const columnMapping = {
      through: 'Attendee',
      otherKey: 'userId',
      foreignKey: 'eventId',
    };
  };
  return Event;
};