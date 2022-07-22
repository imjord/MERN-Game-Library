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

app.use(cors({
    origin: 'http://localhost:3000',
    withCredentials: true
}));
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 2000,
        httpOnly: true,
        signed: true,
        sameSite: 'none',
        origin: 'http://localhost:3000'
    },
    store: new MongoStore({
        mongoUrl: 'mongodb://localhost/reactGameDB',
        ttl: 2 * 24 * 60 * 60
    })
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.use('/api', GameRoutes);
app.use('/api/users', UserRoutes);

db.once('open', () => {
    console.log('Connected to MongoDB');
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
});