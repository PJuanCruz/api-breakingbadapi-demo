const { Router } = require('express');
const { getAllEpisodes } = require('../controllers/episodes.controllers');

const router = Router();

router.get('/', getAllEpisodes);

module.exports = router;
