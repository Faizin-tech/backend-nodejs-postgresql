const router = require('express').Router();
const task1 = require('./task1-router');
const task2 = require('./task2-router');
const task3 = require('./task3-router');
const task4 = require('./task4-router');

router.use('/task1', task1);
router.use('/task2', task2);
router.use('/task3', task3);
router.use('/task4', task4);

module.exports = router;