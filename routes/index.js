const router = require('express').Router();
const task1 = require('./task1-router');
const task2 = require('./task2-router');

router.use('/task1', task1);
router.use('/task2', task2);

module.exports = router;