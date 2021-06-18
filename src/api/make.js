const router = require('express').Router();
const { Model, Make, Manufacturer } = require('../../db');

router.get('/makes', async(req, res, next) => {
    try {
        const make = await Make.findAll({
            include: [ Manufacturer ]
        })
        res.json(make)
    } catch(ex) { 
        next(ex) 
    }
});

router.get('/makes/:id', async(req, res, next) => {
    try {
        const make = await Make.findByPk(req.params.id, {
            include: [ Manufacturer, { model: Model, include: Manufacturer } ]
        })
        res.send(make)
    } catch(ex) { 
        next(ex) 
    }
});

module.exports = router;