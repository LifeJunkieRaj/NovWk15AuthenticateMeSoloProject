'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendee = sequelize.define('Attendee', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    attendee: DataTypes.BOOLEAN,
  }, {});
  Attendee.associate = function(models) {
    Attendee.belongsTo(models.User, {foreignKey:"userId"});
    Attendee.belongsTo(models.Event, {foreignKey:"eventId"})
  };
  return Attendee;
};