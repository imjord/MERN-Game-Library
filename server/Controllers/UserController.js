const passport = require('passport');
const User = require('../models/User');

const UserController = {

    // get all users 
    getAllUsers(req,res){
        User.find().then(results => {
            res.json(results)
        }).catch(err => {
            if(err){
                console.log(err);
            }
        })
    },
    // CREATE A NEW USER 
    createUser(req,res){
        const newUser = new User({
            username: req.body.username,
            password: req.body.password
        })

        // save the new user to a session
        req.session.user = newUser.username;
        console.log(req.session.user);

        newUser.save().then(
            results => {
                res.json({message: "User Created!", results: results})
            }).catch(err => {
                if(err){
                    console.log(err);
                }
            }
        )
    },
    // message to library page
    getLibrary(req,res){
        res.send('Welcome to your library!')
    },
    // login page passport authentication
    loginUser(req,res, next){
        passport.authenticate('local', (err, user, info) => {
            if(err){
                console.log(err);
            }
            if(user){
                req.session.user = user.username
                req.session.library = user.library
                res.json({message: "User Logged In!", session: req.session})
                
            }
            else{
                res.json({message: "User Not Found!"})
            }
        }
        )(req,res, next);
    }
    
}


module.exports = UserController;