const router = require('express').Router();
const movieController = require('../controller').task2ListSearchMovie;

router.get('/search', movieController.task2ListSearchMovie);

module.exports = router;