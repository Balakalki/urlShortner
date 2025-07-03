const express = require('express');
const { handleGetAnalytics } = require('../controller/analytics');

const router = express.Router();

router.get('/:id', handleGetAnalytics);

module.exports = router;