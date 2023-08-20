const passport = require("passport");
const User = require("../models/User");

// https - heroku
// authenticate - done?
// authorize - done?
// rate limit - not done
// error handling - try / catch resstatuss

const getAllUsers = async (req, res) => {
  try {
    const results = await User.find().populate("library");
    res.json(results);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "An error occured whiile fetching all users." });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const errorMsg = [];

    if (!username) {
      errorMsg.push("Please input a username.");
    } else if (username.length < 3) {
      errorMsg.push("Username must be 3 chracters long");
    }
    if (!password) {
      errorMsg.push("Please input a password");
    } else if (password.length < 6) {
      errorMsg.push("password must be longer than 6 characters");
    }

    if (errorMsg.length > 0) {
      return res.status(400).json(errorMsg);
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      errorMsg.push("Username already exists!");
      return res.status(400).json(errorMsg);
    }

    const newUser = new User({
      username,
      password,
    });

    await newUser.save();
    res.json({
      message: "User Created You can log in now with your credentials.",
    });
  } catch (err) {
    console.error("Error creating a user:", err);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later..." });
  }
};

// login page passport authentication
const loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (user) {
      req.session.user = user.username;
      req.session.library = user.library;
      return res.json({ message: "User Logged In!", session: req.session });
    }

    return res.json({ message: "User Not Found!" });
  })(req, res, next);
};

const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.clearCookie("session").send("logout complete");
    }
  });
};

const getLibrary = async (req, res) => {
  try {
    const results = await User.findOne({ username: req.session.user }).populate(
      "library"
    );
    return res.json(results);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Unable to get user library" });
  }
};

const removeGame = async (req, res) => {
  try {
    const username = req.session.user;
    const gameId = req.body._id;

    const results = await User.findOneAndUpdate(
      {
        username,
      },
      { $pull: { library: gameId } },
      { new: true }
    );
    return res.json(results);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Unable to remove game from library" });
  }
};

const addGame = async (req, res) => {
  try {
    const username = req.session.user;
    const gameId = req.body._id;

    const results = await User.findOneAndUpdate(
      {
        username,
      },
      {
        $push: { library: gameId },
      },
      { new: true }
    );
    return res.json(results);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "unable to add game to library" });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  loginUser,
  logoutUser,
  removeGame,
  getLibrary,
  addGame,
};
