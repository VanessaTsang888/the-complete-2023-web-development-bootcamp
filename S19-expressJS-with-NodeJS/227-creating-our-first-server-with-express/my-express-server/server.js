// jshint esversion:6

const express = require("express");
const app = express();

/************************************************************* 
method called: listen > use port 3000.
To see when our server is setup and running we add annomous func 
and execute a call back func to listen method and printout a 
message which is a String value/plain text.
*************************************************************/
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
