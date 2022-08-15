const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/reactGameDB' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


module.exports = mongoose.connection;