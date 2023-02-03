/* 

Snippet as starting point to create a new Node app.
Make Get Req to external server with Node.js > 


*/
//jshint esversion:6"
const express = require("express");
const https = require("https");

const app = express();

// The root route - home page. Send over some plain text. HTTPS Standard GET Req.
app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e72ca729af228boabd5d20e3b7749713&units=metric";
  https.get(url, function (response) {
    console.log(response);
  });
  res.send("Server is up and running.");
});

// Print out the below String.
app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
