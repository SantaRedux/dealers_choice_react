const router = require('express').Router();

router.get('/', async (req, res, next) => {
    res.redirect('/makes')
}

router.use('/makes', require('./make'));

router.use('/models', require('./model'));

module.exports = router;