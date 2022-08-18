const passport = require('passport');
const User = require('../models/User');

const UserController = {

    // get all users 
    getAllUsers(req,res){
        // populate the user with their library

        User.find().populate('library').then(results => {
            res.json(results)
        }).catch(err => {
            if(err){
                console.log(err);
            }
        })
    },
    // CREATE A NEW USER 
    createUser(req,res){
        const errorMsg = [];

        const newUser = new User({
            username: req.body.username,
            password: req.body.password
        })
        
        
        User.findOne({username: newUser.username}).then(user => {
            if(user){
                errorMsg.push('Username already exists');
                res.status(400).json(errorMsg);

            }
        }) 
        if(!newUser.username){
            errorMsg.push('Username is required');
        }
        if(!newUser.password){
            errorMsg.push('Password is required');
        }
        if(newUser.username.length < 3){
            errorMsg.push('Username must be at least 3 characters');
        }
        if(newUser.password.length < 6){
            errorMsg.push('Password must be at least 6 characters');
        }
        if(errorMsg.length > 0){
            res.status(400).json(errorMsg);
        }else{
            
            newUser.save().then(
                results => {
                    res.json({message: "User Created!", results: results})
                    res.redirect('/');
    
                }).catch(err => {
                    if(err){
                        console.log(err);
                    }
                }
            )
        }

        

        // save the new user to a session
        // req.session.user = newUser.username;
        // console.log(req.session.user);

        
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
    },

    // logout page
    logoutUser(req,res){
        req.session.destroy((err) => {
            if(err){
                console.log(err);
            } else {
                res.clearCookie('session').send('logout complete')
            }
        }
    )
    },
    // like a game add to user library
    addGame(req,res){
        User.findOneAndUpdate({username: req.session.user}, {$push: {library: req.body._id}}, {new: true}).then(results => {
            res.json(results)
        }).catch(err => {
            if(err){
                console.log(err);
            }
        }
    )
    },
    // get users library
    getLibrary(req,res){ 
        User.findOne({username: req.session.user}).populate('library').then(results => {
            res.json(results)
        }).catch(err => {
            if(err){
                console.log(err);
            }
        }
    )
    },
    // remove game from users library
    removeGame(req,res){
        User.findOneAndUpdate({username: req.session.user}, {$pull: {library: req.body._id}}, {new: true}).then(results => {
            res.json({message: "Game removed from library!"})
        }).catch(err => {
            if(err){
                console.log(err);
            }
        }
    )
    }
    
}


module.exports = UserController;