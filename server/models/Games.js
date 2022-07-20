

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
    releaseDate: {
        type: Date
    }


})


const Games = new model("Games", GameSchema);

module.exports = Games;