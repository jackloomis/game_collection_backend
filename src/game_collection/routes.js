const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getGames);
router.get('/id/:id', controller.getGamesById);

module.exports = router;
