// jshint esversion:6

const express = require("express");

const app = express();
/* 
Search for index.html file in current location within our local machine.
This wil give us the file path of the current file no matter where its 
hosted such as remote server, a cloud etc.
__dirname > is a const that allows us to grab hold of the current file 
loction at any given time so can use that location and append the loction 
of another file to it.
*/
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

/*
Get our app to listen on prot 3000 > localhost:3000 in browser.
Then to print out some plain text on the screen.
*/

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
