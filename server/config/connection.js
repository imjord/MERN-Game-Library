const mongoose = require("mongoose");
require("dotenv").config();

// your unique uri process.env.MONGO_URI
//local "mongodb://127.0.0.1:27017/myapp"
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
