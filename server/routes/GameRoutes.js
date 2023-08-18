const router = require("express").Router();
const {
  getAllGames,
  getGamesByCategory,
  getGameById,
  getGameByName,
  getTrending,
} = require("../Controllers/GameController");
const validateGetGameByName = require("../utils/validate");

router.get("/games", getAllGames);
// router.get('/games/:category', getGamesByCategory);
router.get("/games/details/:id", getGameById);
router.get("/games/:name", validateGetGameByName, getGameByName);
router.get("/games/trending/isTrending", getTrending);

module.exports = router;
