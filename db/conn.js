const Sequelize = require('sequelize');
const conn = new Sequelize('postgres://localhost:1340/dealers_react_db', {
    logging: true
});

module.exports = conn;