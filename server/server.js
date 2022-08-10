const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const db = require('./config/connection');
const GameRoutes = require('./routes/GameRoutes');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const UserRoutes = require('./routes/UserRoutes');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const path = require('path');
require('./config/passport')(passport);
require('dotenv').config()

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
    cookie: {
        httpOnly: true,
        maxAge: 3600000
    }
}));

app.use(cookieParser("secret"));

// passport middleware 
app.use(passport.initialize());
app.use(passport.session());



app.use(cookieParser(('secret')));

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.use('/api', GameRoutes);
app.use('/api/users', UserRoutes);



if (process.env.NODE_ENV === "production") {

    app.use(express.static('client/build'))  // set static folder 
    
    app.get('*', (req, res)=> {     
      res.sendFile(path.resolve(__dirname, 'client', 'build',         
                    'index.html' )); 
    })
    app.get('*', (req, res)=> {     
      res.sendFile(path.resolve(__dirname, 'client', 'build',         
                    'index.html' )); 
    })
  }




db.once('open', () => {
    console.log('Connected to MongoDB');
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
});