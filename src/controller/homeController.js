const connection = require("../config/database.js");
const { getAllUser, getUserById, editUser } = require("../services/CRUD.js");

const getHomepage = async (req, res) => {
  let result = await getAllUser();
  return res.render("home.ejs", { listUsers: result });
};

const getEdit = async (req, res) => {
  const user_id = req.params.user_id;
  let result = await getUserById(user_id);
  //   console.log("check: ", result);
  let user = result && result.length > 0 ? result[0] : {};
  res.render("edit.ejs", { user: user });
};

const getTest = (req, res) => {
  res.render("xample.ejs");
};

const getCreate = (req, res) => {
  res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
  //   console.log(">>> req.body: ", req.body);
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  //   console.log("email= ", email, "name= ", name, "city= ", city);
  //   let {email, name, city} = req.body;
  //   res.send("Create user");
  //   connection.query(
  //     "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
  //     [email, name, city],
  //     (err, results) => {
  //       res.send("Created user succeed");
  //     },
  //   );

  let [result, fields] = await connection.query(
    "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
    [email, name, city],
  );

  console.log(">>>check results: ", fields);

  res.send("Created user succeed");

  //   connection.query("SELECT * FROM Users u", function (err, results, fields) {
  //     console.log(">>>results: ", results);
  //     console.log("fields =", fields);
  //   });

  //   const [result, fields] = await connection.query("SELECT * FROM Users");
  //   console.log("check: ", result);
};

const postEditUser = async (req, res) => {
  let id = req.body.id;
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  await editUser(id, email, name, city);

  let user = await getAllUser();
  res.render("home.ejs", { listUsers: user });
};

module.exports = {
  getHomepage,
  getTest,
  postCreateUser,
  getCreate,
  getEdit,
  postEditUser,
};
