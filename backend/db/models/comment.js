'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {foreignKey: "userId"});
    Comment.belongsTo(models.Event, {foreignKey: "eventId"})
  };
  return Comment;
};