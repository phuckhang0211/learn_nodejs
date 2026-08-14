const connection = require("../config/database.js");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const getTest = (req, res) => {
  res.render("xample.ejs");
};

const postCreateUser = (req, res) => {
  //   console.log(">>> req.body: ", req.body);
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  //   console.log("email= ", email, "name= ", name, "city= ", city);

  //   let {email, name, city} = req.body;
  //   res.send("Create user");
  connection.query(
    "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
    [email, name, city],
    (err, results) => {
      res.send("Created user succeed");
    },
  );
};

module.exports = {
  getHomepage,
  getTest,
  postCreateUser,
};
