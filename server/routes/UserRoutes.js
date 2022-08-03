const requireAuth = require('../config/auth');
const { getAllUsers, createUser, getLibrary, loginUser } = require('../Controllers/UserController');

const router = require('express').Router();


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