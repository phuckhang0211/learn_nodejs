const express = require("express");
const path = require("path");
require("dotenv").config();

// import express from 'express'; //es modules
const app = express();
const port = process.env.PORT || 3100;
const host = process.env.HOST_NAME;

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// khai báo route
app.get("/", (req, res) => {
  //   res.send("Hello world!");
  res.render("xample.ejs");
});

app.get("/abc", (req, res) => {
  res.send("check ABC");
});

app.get("/test", (req, res) => {
  res.send("<h1>Heeloo Khangg</h1>");
});

app.listen(port, host, () => {
  console.log("Server is running ...");
});
