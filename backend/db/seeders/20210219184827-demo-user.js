'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        firstName: 'FirstName',
        lastName: 'LastName',
        profileImage: '',
        phoneNumber: 1234567890,
        locationName: 'New York',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstName: 'FirstName2',
        lastName: 'LastName2',
        profileImage: '',
        phoneNumber: 1234567891,
        locationName: 'New York',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstName: 'FirstName3',
        lastName: 'LastName3',
        profileImage: '',
        phoneNumber: 1234567892,
        locationName: 'New York',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'gabe1@email.com',
        username: 'gabe1',
        hashedPassword: bcrypt.hashSync('gabe1'),
        firstName: 'Gabe',
        lastName: 'One',
        profileImage: '',
        phoneNumber: 1002200110,
        locationName: 'Dunedin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'jas2@email.com',
        username: 'jas2',
        hashedPassword: bcrypt.hashSync('jas2'),
        firstName: 'Jas',
        lastName: 'Two',
        profileImage: '',
        phoneNumber: 1002200111,
        locationName: 'Palm Harbor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'billie3@email.com',
        username: 'billie3',
        hashedPassword: bcrypt.hashSync('billie3'),
        firstName: 'Billie',
        lastName: 'Three',
        profileImage: '',
        phoneNumber: 1002200113,
        locationName: 'Clearwater',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], { });
  },

down: async (queryInterface, Sequelize) => {
  const Op = Sequelize.Op;
  return await queryInterface.bulkDelete('Users', {
    username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
  }, {});
}
};
