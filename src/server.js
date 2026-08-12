require("dotenv").config();
const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const configViewEngine = require("./config/viewEngine.js");

const webRoutes = require("./routes/web.js");
const app = express();
const port = process.env.PORT || 3100;
const host = process.env.HOST_NAME;

//config view engine
//config static file
configViewEngine(app);

// Khai báo routes
app.use("/", webRoutes);

// test connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

//simple querry
connection.query("SELECT * FROM Users u", function (err, results, fields) {
  console.log(">>>results: ", results);
  console.log("fields =", fields);
});

app.listen(port, host, () => {
  console.log("Server is running ...");
});
