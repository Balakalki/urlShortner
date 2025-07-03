const express = require("express");
const { handleGetHomePage } = require("../controller");
const { restrictTo } = require("../middleware/userAut");

const router = express.Router();

router.get("/", restrictTo(["NORMAL", "ADMIN"]), handleGetHomePage);


module.exports = router;
