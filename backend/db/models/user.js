'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
      },
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 256],
      },
    },
    locationName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 30],
      },
    },
    phoneNumber: {
      type: DataTypes.NUMBER,
      allowNull: true,
      validate: {
        len: [10, 10],
      },
    },
  }, 
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });
  User.associate = function (models) {
    // associations can be defined here
   const columnMappingMember = {
      through: 'Member',
      otherKey: 'groupId',
      foreignKey: 'userId'
    }
    User.belongsToMany(models.Group, columnMappingMember)
    const columnMappingAttendee = {
      through: 'Attendee',
      otherKey: 'eventId',
      foreignKey: 'userId'
    }
    User.belongsToMany(models.Event, columnMappingAttendee);
    User.hasMany(models.Comment,{foreignKey: "userId"} )
    // const columnMappingComment = {
    //   through: 'Comment',
    //   otherKey: 'eventId',
    //   foreignKey: 'userId'
    // }
    // User.hasMany(models.Event, columnMappingComment);
  };
  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };
  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };
  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };
  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };
  return User;
};