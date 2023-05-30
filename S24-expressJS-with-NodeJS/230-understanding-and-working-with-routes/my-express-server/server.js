// jshint esversion:6

const express = require("express");

const app = express();

/************************************************************* 
Different routes for different page such as contact page and 
display some content on the screen for our users. 
Install and use Nodemon - no need to keep having to restart server
when make change to code.
*************************************************************/

/* 
This route is for when user go to the home page. 
Target home route then responsed with a callback func which is 
anonymous func.
*/
app.get("/", function (req, res) {
  res.send("<h1> Hello, world! </h1>");
});

// This route is for the contact page:
app.get("/contact", function (req, res) {
  res.send("Contact me on: van@gmail.com");
});

// This route is for the about page:
app.get("/about", function (req, res) {
  res.send(
    "I am a Frontend Software Developer learning server side development using Node.js with Express framework."
  );
});

// This route is for the hobbies page and now using nodemon to save me having to keep restarting the server every time I make change to my code:
app.get("/hobbies", function (req, res) {
  res.send(
    "<strong>Vanessa's hobbies are:</strong><ul><li>Drinking tea</li><li>Eating schinese dim sum</li><li>Coding</li></ul>."
  );
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
