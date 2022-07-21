

const {Schema, model} = require("mongoose");


const GameSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
        min: 0
    },
    category: {
        type: String,
        required: true
    },
    isTrending: {
        type: Boolean,
        default: false
    },
    image: {
        type: String
    },
    description:{
        type: String
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],
    trailer: {
        type: String
    },
    platforms: [{
        type: String,
        default: "PC"
    }],
    releaseDate: {
        type: Date
    }


})


const Games = new model("Games", GameSchema);

module.exports = Games;