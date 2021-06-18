const Sequelize = require('sequelize');
const { DataTypes: { STRING } } = Sequelize; 
const conn = require('./conn');

const Make = conn.define('make', {
    name: { 
        type: STRING,
        allowNull: false,
        validate: {
            empty: false
        }
    },
    logoURL: STRING
});

module.exports = Make;