const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getTest,
  postCreateUser,
} = require("../controller/homeController");

router.get("/", getHomepage);
router.get("/khang", getTest);

router.post("/create-user", postCreateUser);

module.exports = router;
