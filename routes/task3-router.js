const router = require('express').Router();
const wordController = require('../controller').task3FindWord;

router.get('/findWord', wordController.task3FindWord);

module.exports = router;