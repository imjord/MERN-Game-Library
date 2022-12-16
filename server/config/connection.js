const mongoose = require('mongoose');
require('dotenv').config()

// if you deploy to heroku again update the git remote url to the heroku url https://imjord-games-library.herokuapp.com/  https://git.heroku.com/imjord-games-library.git



mongoose.connect("mongodb://127.0.0.1:27017/gamelibrary",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


module.exports = mongoose.connection;