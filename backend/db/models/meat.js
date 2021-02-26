'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meat = sequelize.define('Meat', {
    meatName: DataTypes.STRING
  }, {});
  Meat.associate = function(models) {
    // associations can be defined here
    const columnMappingEventMeat = {
      through: 'EventMeat',
      otherKey: 'eventId',
      foreignKey: 'meatId',
    };
    Meat.belongsToMany(models.Event, columnMappingEventMeat);
  };
  return Meat;
};