const router = require('express').Router();
const movieController = require('../controllers').task2ListSearchMovie;

router.get('/search', movieController.task2ListSearchMovie);
router.get('/detail', movieController.task2SearchMovieById);

module.exports = router;