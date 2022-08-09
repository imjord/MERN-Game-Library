const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect("mongodb+srv://imjord:imjord123@cluster0.igc6tbx.mongodb.net/?retryWrites=true&w=majority" || 'mongodb://localhost/reactGameDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


module.exports = mongoose.connection;