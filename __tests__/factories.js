const faker = require('faker');

const { User } = require('../src/app/models');
const { factory } = require('factory-girl');

factory.define('User', User, {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});

module.exports = factory;