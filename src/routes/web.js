const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getTest,
  postCreateUser,
  getCreate,
  getEdit,
} = require("../controller/homeController");

router.get("/", getHomepage);
router.get("/khang", getTest);
router.get("/create", getCreate);
router.get("/edit", getEdit);

router.post("/create-user", postCreateUser);

module.exports = router;
