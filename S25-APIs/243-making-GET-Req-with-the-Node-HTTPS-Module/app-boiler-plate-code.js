// Snippet as starting point for app.js

//
const express = require("express");
const app = express();

// The route is the home page. Send or printout the plain text String onto the screen.
app.get("/", function (req, res) {
  res.send("Server is up and running.");
});
// Run on port localhost:3000 and printout the plain text on the screen.
app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
