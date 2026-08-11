const express = require("express");
const router = express.Router();

// khai báo route
router.get("/", (req, res) => {
  //   res.send("Hello Khang");
  res.render("xample.ejs");
});

router.get("/abc", (req, res) => {
  res.send("check ABC");
});

router.get("/test", (req, res) => {
  res.send("<h1>Heeloo Khangg</h1>");
});

module.exports = router;
