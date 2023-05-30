// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
// Use express static to specify a static fold which is the public dir where we have our styles file and image file.
app.use(express.static("public"));
// use the url encoded of body-parser and set extended to true
app.use(bodyParser.urlencoded({ extended: true }));

//  Setup GET method for home route. Deliver the file at the dir name.
//  Use Nodemon to run server: nodemon app.js
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

// Program the POST route. Log the user's input using body-parser
app.post("/", function (req, res) {
  let firstName = req.body.fName;
  let lastName = req.body.lName;
  let email = req.body.email;

  console.log(firstName, lastName, email);
});

// setup server to listen on port 3000
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
