const routes = require('express').Router();
const {
    User
} = require('./app/models');

// Definição de rotas

User.create({
    name: 'Rodrigo',
    email: 'rodrigo.coffani@gmail.com',
    password_hash: 123456789
})

module.exports = routes;