const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
  // config template engine
  console.log(">>> check:", path.join("./src", "views"));
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");
  // config static file
  app.use(express.static(path.join("./src", "public"))); // routes đến các đường đẫn có trong public trước
};

module.exports = configViewEngine;
