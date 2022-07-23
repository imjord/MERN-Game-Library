const { getAllUsers, createUser } = require('../Controllers/UserController');

const router = require('express').Router();


router.get('/', getAllUsers);
router.post('/', createUser);
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