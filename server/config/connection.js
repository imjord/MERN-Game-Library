const mongoose = require("mongoose");
require("dotenv").config();

// process.env.MONGO_URI
mongoose.connect("mongodb://127.0.0.1:27017/testgamelibrary", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
