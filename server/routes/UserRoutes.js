const requireAuth = require('../config/auth');
const { getAllUsers, createUser, getLibrary, loginUser, addGame, removeGame } = require('../Controllers/UserController');

const router = require('express').Router();

router.put('/remove', requireAuth, removeGame);
router.post('/addgame', requireAuth, addGame);
router.post('/login', loginUser);
router.get('/library', requireAuth, getLibrary);
router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/session', (req, res) => {
    res.send(req.session.user);
});
router.get('/logout', (req,res) => {
    req.session.destroy((err) => {
        if(err) {
            console.log(err);
            } else {
                res.clearCookie('session').send('logout complete')
            }
        
    
})
})

module.exports = router;