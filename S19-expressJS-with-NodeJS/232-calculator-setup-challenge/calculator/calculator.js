// jshint esversion:6

const express = require("express");

const app = express();
/* 
1. define/setup our home route. inside the app.get() method, 
use the send method that is inside of the response Object to 
print out the Hello world! plain text for our users.
*/
app.get("/", function (req, res) {
  res.send("Hello world!");
});

/*
Get our app to listen on prot 3000 > localhost:3000 in browser.
Then to print out some plain text on the screen.
*/

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});

/*
Spin up our server on port 3000 with app.listen.
Run server with nodemon to spin up our calculator.js
*/

/*
I've used localhost:3000 and tested. I have the plain text
of Hello world! printed out as expected. I means that I am
 listening on port 3000 my home route is working and I'm 
 using express Express to do all that.
*/
