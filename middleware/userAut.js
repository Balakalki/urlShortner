const { getUser} = require('../service/auth')

function checkforAuthentication(req, res, next){
    const token = req.cookies?.uid;

    const user = getUser(token);

    req.user = user;

    next();
}

function restrictTo(roles){
    return function (req, res, next){
        if(!req.user) return res.redirect('/login');

        if(!roles.includes(req.user.role)) return res.end("unAuthorized");

        return next();
    }
}

module.exports = {checkforAuthentication, restrictTo}