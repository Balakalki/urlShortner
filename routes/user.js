const express = require('express');
const {handleUserLogIn, handleUserSignUp} = require('../controller/user');

const router = express.Router();

router.post('/login', handleUserLogIn);

router.post('/signup', handleUserSignUp);

module.exports = router;