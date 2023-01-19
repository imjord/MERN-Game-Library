const mongoose = require('mongoose');
const Games = require('../models/Games');
require('dotenv').config()

mongoose.connect(process.env.MONGODBURL).then(() => {
    console.log('game seeds opened')
}).catch((err) => {
    console.log(err);
})

const seedProducts = [
    {
        name: 'Doom',
        price: 10,
        category: 'FPS',
        description: 'Doom is a first-person shooter video game, developed by id Software and published by Bethesda Softworks. It is the fourth installment in the Doom series, and the successor to Doom II: Hell on Earth. Doom is a single-player, three-dimensional action-adventure game, and the first game in the Doom series to be released for Microsoft Windows. It was released in May 2016 for Microsoft Windows, PlayStation 4, and Xbox One. Doom is a first-member of the Doom series, and the first game in the series to be released for the Nintendo Switch.',
        image: 'doom.jpg',
        trailer: 'https://www.youtube.com/embed/BkaC1-QoraY',
        releaseDate: '1993-12-10',
        platforms: ['PC'],
        isTrending: false
    },
    {
        name: 'Mario',
        price: 10,
        category: 'Platformer',
        description: 'Mario is a platform game',
        image: 'mario.jpg',
        trailer: 'https://www.youtube.com/embed/eO8xe2AUY4c',
        releaseDate: '2012-07-28',
        platforms: ['Nitendo Switch', 'Nitendo DS', 'Playstation 3', 'Playstation 4', 'Xbox 360', 'Xbox One'],
        isTrending: false
    },
    {
        name: 'Pokemon',
        price: 10,
        category: 'RPG',
        description: 'Pokemon is a role-playing video game series created by Satoshi Tajiri and first released in 1996 for the Game',
        image: 'pokemon.jpg',
        trailer: 'https://www.youtube.com/embed/I4RynqpahT8',
        releaseDate: '2022-01-28',
        platforms: ['Nintendo Switch', 'Nintendo DS'],
        isTrending: true
    },
    {
        name: 'Grand Theft Auto V',
        price: 60,
        category: 'Action',
        description: "Grand Theft Auto V is an open world action-adventure video game developed by Rockstar North and published by Rockstar Games. It was released on September 9, 2013 for the PlayStation 3 and Xbox 360, and on November 4, 2013 for the PlayStation 4 and Xbox One. It is the eleventh installment in the Grand Theft Auto series.",
        image: 'gta.jpg',
        trailer: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        releaseDate: '2013-09-17',
        platforms: ['PC', 'Playstation 3', 'Playstation 4', 'Xbox 360', 'Xbox One'],
        isTrending: true
    }
]

const seedDB = async () => {
    await Games.deleteMany({});
    await Games.insertMany(seedProducts)
}

seedDB().then(() => {
    mongoose.connection.close()
})