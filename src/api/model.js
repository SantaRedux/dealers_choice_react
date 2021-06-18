const router = require('express').Router();
const { Model, Make, Manufacturer } = require('../../db');

router.get('/models', async(req, res, next) => {
    try {
        const model = await Model.findAll({
            include: [ Make, Manufacturer ]
        })
        res.send(model)
    } catch(ex) { 
        next(ex) 
    }
});

router.get('/models/:id', async(req, res, next) => {
    try {
        const model = await Model.findByPk(req.params.id, {
            include: [ Make, Manufacturer ]
        })
        res.send(model)
    } catch(ex) { 
        next(ex) 
    }
});

module.exports = router;