const conn = require('./conn');
const Make = require('./make');
const Manufacturer = require ('./manufacturer');
const Model = require('./model');

Model.belongsTo(Make);
Make.hasMany(Model);

Make.belongsTo(Manufacturer);
Manufacturer.hasMany(Make);

module.exports = {
    conn, Make, Manufacturer, Model
};