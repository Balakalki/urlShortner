const express = require('express');
const { handleGetAdminHomePage } = require('../controller/admin');
const { restrictTo } = require('../middleware/userAut');

const router = express.Router();

router.get('/urls', restrictTo(["ADMIN"]), handleGetAdminHomePage);

module.exports = router;