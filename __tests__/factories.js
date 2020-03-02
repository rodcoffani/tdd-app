const { User } = require('../src/app/models');
const { factory } = require('factory-girl');

factory.define('User', User, {
    name: 'Rodrigo',
    email: 'rodrigo.coffani@gmail.com',
    password: '123123'
});

module.exports = factory;