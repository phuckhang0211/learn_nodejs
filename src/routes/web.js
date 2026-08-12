const express = require("express");
const router = express.Router();
const { getHomepage, getTest } = require("../controller/homeController");

router.get("/", getHomepage);
router.get("/test", getTest);

module.exports = router;
