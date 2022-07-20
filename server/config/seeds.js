const mongoose = require('mongoose');
const Games = require('../models/Games');

mongoose.connect('mongodb://localhost/reactGameDB').then(() => {
    console.log('game seeds opened')
}).catch((err) => {
    console.log(err);
})

const seedProducts = [
    {
        name: 'Doom',
        price: 10,
        category: 'FPS',
        image: 'doom.jpg'
    },
    {
        name: 'Mario',
        price: 10,
        category: 'Platformer',
        image: 'mario.jpg'
    },
    {
        name: 'Pokemon',
        price: 10,
        category: 'RPG',
        image: 'pokemon.jpg'
    },
    {
        name: 'Grand Theft Auto V',
        price: 60,
        category: 'Action',
        image: 'gta.jpg'
    }
]

const seedDB = async () => {
    await Games.deleteMany({});
    await Games.insertMany(seedProducts)
}

seedDB().then(() => {
    mongoose.connection.close()
})