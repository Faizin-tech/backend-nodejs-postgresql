const router = require('express').Router();
const anagramController = require('../controllers').task4Anagram;

router.get('/', anagramController.task4Anagram);

module.exports = router;