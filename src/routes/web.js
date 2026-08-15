const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getTest,
  postCreateUser,
  getCreate,
  getEdit,
  postEditUser,
  getDelete,
} = require("../controller/homeController");

router.get("/", getHomepage);
router.get("/khang", getTest);
router.get("/create", getCreate);
router.get("/edit/:user_id", getEdit);
router.get("/delete/:id", getDelete);

router.post("/create-user", postCreateUser);
router.post("/edit-user", postEditUser);

module.exports = router;
