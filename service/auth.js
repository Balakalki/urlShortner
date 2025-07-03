const jwt = require('jsonwebtoken');

const secrete = process.env.SECRETE

function setUser(user){
    const payload ={
        _id: user._id,
        email: user.email,
        role: user.role,
    }

    return jwt.sign(payload, secrete);
}

function getUser(token){
    if(!token) return null;
    return jwt.verify(token, secrete);
}
module.exports = {setUser, getUser}