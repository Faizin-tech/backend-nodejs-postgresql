const router = require('express').Router();
const anagramController = require('../controller').task4Anagram;

router.get('/', anagramController.task4Anagram);

module.exports = router;