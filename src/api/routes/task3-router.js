const router = require('express').Router();
const wordController = require('../controllers').task3FindWord;

router.get('/findWord', wordController.task3FindWord);

module.exports = router;