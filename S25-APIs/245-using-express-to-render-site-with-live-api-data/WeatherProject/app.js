/* 
Snippet as starting point to create a new Node app.
Make Get Req to external server with Node.js > 
*/

//jshint esversion:6"
const express = require("express");
const https = require("https");

const app = express();

/* The route > home page. 
Call the GET method on the native HTTPS Node module. Then when we get our results back, we either log the status code or
simply get hold of the data. Tested my API in UI and passed as have been able to print out the below String and in Terminal
received code of 200 - ok.
*/
app.get("/", function (req, res) {
// My own API from registeing an account on the Open Weather Map website.
  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=4b33668b0a04a645d631d93fa31022dc&units=metric";
  https.get(url, function (response) {
    console.log(response.statusCode); // code 200 - ok

      response.on("data", function(data) {
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp
        // Get the piece of data we want
        const weatherDescription = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        // String concatination to add the icon variable.
        const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        // Using template literal to printout the plain text with dynamic data on to the screen. Send the temp and the weather description.
          res.write(`<p>The weather is currently ${weatherDescription}.</p><h1>The tempature in Lodnon is ${temp} degrees Celcious.</h1>`);
          res.write("I don't like the UK weather as its often cold and gray.");
          // Send back to the browser an image element that will display the image URL.
          res.write("<img src=" + imageURL +">");
          res.send();
      })
  })
});

// Print out the below String.
app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
