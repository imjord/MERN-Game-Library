const Games = require('../models/Games');


const GameController = {
    // get all games 
    getAllGames(req,res) {
        Games.find().then(results => {
            res.json(results)
        }).catch(err => {
            if(err){
                console.log(err)
            }
        })
    },
    // get games by category
    getGamesByCategory(req,res) {
        Games.find({category: req.params.category}).then(results => {
            res.json(results)
        }).catch(err => {
            if(err){
                console.log(err)
            }
        })
    },
    // get game by id
    getGameById(req,res) {
        Games.findById({_id: req.params.id}).then(results => {
            res.json(results)
        }).catch(err => {
            if(err){
                console.log(err)
            }
        }
        )
    },
    // get game by name
    getGameByName(req,res) {
        Games.find({name: req.params.name}).then(results => {
            res.json(results)
        }).catch(err => {
            if(err){
                console.log(err)
            }
        }
        )
    },
    // get game by trending 
    getTrending(req,res) {
        Games.find({isTrending: true}).then(results => {
            res.json(results)
        }).catch(err => {
            if(err){
                console.log(err)
            }
        })
    }


}


module.exports = GameController;