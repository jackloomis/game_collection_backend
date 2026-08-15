const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getGames);
router.get('/id/:id', controller.getGamesById);
router.post('/', controller.addNewGame);
router.put('/id/:id', controller.updateGame);

module.exports = router;
