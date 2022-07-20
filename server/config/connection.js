const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactGameDB');


module.exports = mongoose.connection;