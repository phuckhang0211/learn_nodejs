require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine.js");

const webRoutes = require("./routes/web.js");
const app = express();
const port = process.env.PORT || 3100;
const host = process.env.HOST_NAME;
const connection = require("./config/database.js");
//config view engine
//config static file
configViewEngine(app);

// Khai báo routes
app.use("/", webRoutes);

//simple querry
connection.query("SELECT * FROM Users u", function (err, results, fields) {
  console.log(">>>results: ", results);
  console.log("fields =", fields);
});

app.listen(port, host, () => {
  console.log("Server is running ...");
});
