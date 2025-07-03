const express = require('express');
const { handlePostURL, handleRedirectURL } = require('../controller/url');

const router = express.Router();

router.post("/", handlePostURL);

router.get("/:id", handleRedirectURL);

module.exports = router;