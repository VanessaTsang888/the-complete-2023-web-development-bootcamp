// Snippet as starting point to create a new Node app

const express = require("express");

const app = express();

// The root route - home page. Send over some plain text.
app.get("/", function (req, res) {
  res.send("Server is up and running.");
});

// Print out the below String.
app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
