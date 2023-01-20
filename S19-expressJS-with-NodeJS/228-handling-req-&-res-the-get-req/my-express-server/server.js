// jshint esversion:6

const express = require("express");

const app = express();

/************************************************************* 
Add response code so we can get a response > GET request.
Call back annominous func. Print out the req Object when the
callback gets triggered and look on the UI.
Send the browser a response messge to printout: Hello world! .
*************************************************************/

app.get("/", function (req, res) {
  res.send("<h1> Hello, world! </h1>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
