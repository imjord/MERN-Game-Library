const router = require('express').Router();
const {getAllGames, getGamesByCategory, getGameById, getGameByName}  = require('../Controllers/GameController');



router.get('/games', getAllGames);
// router.get('/games/:category', getGamesByCategory);
router.get('/games/details/:id', getGameById);
router.get('/games/:name', getGameByName);


module.exports = router;