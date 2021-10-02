const router = require('express').Router();
const task1 = require('./task1-router');

router.use('/task1', task1);

module.exports = router;