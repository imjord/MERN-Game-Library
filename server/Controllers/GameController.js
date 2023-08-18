const Games = require("../models/Games");

const getAllGames = async (req, res) => {
  try {
    const getGames = await Games.find();
    res.json(getGames);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occured whiile fetching all games." });
  }
};

const getGamesByCategory = async (req, res) => {
  try {
    const results = await Games.find({ category: req.params.category });
    res.json(results);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occured whiile fetching game by category." });
  }
};

const getGameById = async (req, res) => {
  try {
    const results = await Games.findById({ _id: req.params.id });
    res.json(results);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occured whiile fetching game by id." });
  }
};
const getGameByName = async (req, res) => {
  try {
    const results = await Games.find({ name: req.params.name });
    res.json(results);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occured whiile fetching game name." });
  }
};

const getTrending = async (req, res) => {
  try {
    const results = await Games.find({ isTrending: true });
    res.json(results);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occured whiile fetching trending game." });
  }
};

module.exports = {
  getAllGames,
  getGameById,
  getGameByName,
  getGamesByCategory,
  getTrending,
};
