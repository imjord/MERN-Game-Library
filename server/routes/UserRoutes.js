const router = require('express').Router();



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