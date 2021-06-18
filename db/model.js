const Sequelize = require('sequelize');
const { DataTypes: { STRING, INTEGER } } = Sequelize;
const conn = require('./conn');

const Model = conn.define('model', {
    name: STRING,
    imageURL: STRING,
    year: INTEGER
});

module.exports = Model;