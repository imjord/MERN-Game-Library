


const requireAuth = (req, res, next) => {
    const { user } = req.session;
    if (!user) {
        return res.status(401).json({ message: 'You must be logged in to view this page' });
    }
    next();
}


module.exports = requireAuth;