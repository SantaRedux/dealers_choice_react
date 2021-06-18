const Sequelize = require('sequelize');
const { DataTypes: { STRING, INTEGER } } = Sequelize;
const conn = require('./conn');

const Manufacturer = conn.define('manufacturer', {
    name: STRING,
    nationality: STRING
});

module.exports = Manufacturer;