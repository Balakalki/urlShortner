const Users = require('../model/users');
const { setUser } = require('../service/auth')

async function handleUserLogIn(req, res){
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password) return res.render('login',{error: "Please enter email and password"});

    const user = await Users.findOne({email, password});

    if(!user){return res.render('login',{error: "email or password are invalid"})};

    const token = setUser(user);

    res.cookie("uid", token);

    return res.redirect('/');
}

async function handleUserSignUp(req, res){
    const full_name = req.body.full_name;
    const email = req.body.email;
    const password = req.body.password;

    if(!full_name || !email || !password) return res.render('signup',{error: "all fields are required"});

    Users.create({
        full_name,
        email,
        password,
    })

    return res.redirect('/');
}

module.exports = {handleUserLogIn, handleUserSignUp}