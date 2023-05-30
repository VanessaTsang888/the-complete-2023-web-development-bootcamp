/* This syntax allows our JS code run on the server side or BE and not on the FE which makes our app run faster which is better for performance.  */

// jshint esversion:6
const express = require("express");
// Incorporate the package body-parser into our project.
const bodyParser = require("body-parser");

const app = express();
// Get access to form data using this: urlencoded method
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Change error code 404 to 200 by writing a POST req. Only log the value of the first input.
// The users input or value they input into first input field gets stored inside of: req.body.num1
app.post("/", function (req, res) {
  // console.log(req.body.num1);
  // Make simple calculator that adds two nums. Used the Number method to convert String into Number values.
  let num1 = Number(req.body.n1);
  let num2 = Number(req.body.n2);
  let result = num1 + num2;
  // Print out whatever the result is for user's calculation they input into the two fields.
  res.send("The result of your calculation is " + result);
});

/* Get our app to listen on prot 3000 > localhost:3000 in browser.
Then to print out some plain text on the screen. */
app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
