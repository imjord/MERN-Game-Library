const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const db = require('./config/connection');
const GameRoutes = require('./routes/GameRoutes');

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.use('/api', GameRoutes);

db.once('open', () => {
    console.log('Connected to MongoDB');
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
});