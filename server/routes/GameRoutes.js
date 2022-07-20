const router = require('express').Router();
const {getAllGames, getGamesByCategory, getGameById}  = require('../Controllers/GameController');



router.get('/games', getAllGames);
router.get('/games/:category', getGamesByCategory);
router.get('/games/details/:id', getGameById);



module.exports = router;