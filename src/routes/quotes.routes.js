const { Router } = require('express');
const { getAllQuotes } = require('../controllers/quotes.controllers');

const router = Router();

router.get('/', getAllQuotes);

module.exports = router;
