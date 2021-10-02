const router = require('express').Router();
const userController = require('../controller').task1;

router.get('/', userController.task1);

module.exports = router;