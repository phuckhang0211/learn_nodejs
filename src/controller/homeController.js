const connection = require("../config/database.js");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const getTest = (req, res) => {
  res.render("xample.ejs");
};

const postCreateUser = (req, res) => {
  console.log(">>> req.body: ", req.body);
  res.send("Create user");
};

module.exports = {
  getHomepage,
  getTest,
  postCreateUser,
};
