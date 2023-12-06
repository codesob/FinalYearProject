"use strict";
require("dotenv").config();

var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  User = require("./models/userModel"),
  bodyParser = require("body-parser"),
  jsonwebtoken = require("jsonwebtoken");

const mongoose = require("mongoose");


const mongoURI =
  "mongodb+srv://Virtualtryon:WAsLuY17VPSGnhiY@cluster0.lyqthk1.mongodb.net/mydatabase?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {}).then(
  function () {
    console.log("MongoDB Connected. Server started on: " + port);
  },
  function (err) {
    console.error("MongoDB connection error: " + err.message);
  }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split(" ")[1],
      "RESTFULAPIs",
      function (err, decode) {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});

var routes = require("./routes/userRoute");
routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);

console.log("RESTful API server started on: " + port);

module.exports = app;
