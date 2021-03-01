'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    location: DataTypes.STRING,
    groupImage: DataTypes.STRING,
    titleName: DataTypes.STRING,
    groupVisibility: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Group.associate = function(models) {
    const columnMappingMember = {
      through: 'Member', // This is the model name referencing the
      otherKey: 'userId',
      foreignKey: 'groupId'
     }
     Group.belongsToMany(models.User, columnMappingMember);
     Group.hasMany(models.Event,{foreignKey:{name:'groupId'}})
  };
  return Group;
};