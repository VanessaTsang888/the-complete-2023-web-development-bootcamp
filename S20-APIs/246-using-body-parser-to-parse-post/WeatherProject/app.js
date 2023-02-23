/* 
Snippet as starting point to create a new Node app.
Make Get Req to external server with Node.js > 
*/

//jshint esversion:6"
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
// Get our app to use the body parser that we required above.
app.use(bodyParser.urlencoded({extended: true}));

/* The route > home page. 
Call the GET method on the native HTTPS Node module. Then when we get our results back, we either log the status code or
simply get hold of the data. Tested my API in UI and passed as have been able to print out the below String and in Terminal
received code of 200 - ok.
*/
app.get("/", function (req, res) {
  // send index.html over to the browser
  res.sendFile(__dirname + "/index.html");

});
// Catch our root route from the index.html 
// The cityName is the value from the name prop within the input element within the index.htl
app.post("/", function(req, res) {
  const query = req.body.cityName;
  const apiKey = "4b33668b0a04a645d631d93fa31022dc";
  const unit = "metric";
  // My own API from registeing an account on the Open Weather Map website.
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&=units" + unit;
  https.get(url, function (response) {
    console.log(response.statusCode); // code 200 - ok

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      // Get the piece of data we want
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      // String concatination to add the icon variable.
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      // Using template literal to printout the plain text with dynamic data on to the screen. Send the temp and the weather description.
      res.write(
        `<p>The weather is currently ${weatherDescription}.</p><h1>The tempature in ${query} is ${temp} degrees Celcious.</h1>`
      );
      res.write("It is nice and *HOT* in China.");
      // Send back to the browser an image element that will display the image URL.
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
})



// Print out the below String.
app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
