// jshint esversion:6"
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
// Get our app to use the body parser that we required above.
app.use(bodyParser.urlencoded({extended: true}));

/* The route > home page. Call the GET method on the native HTTPS Node module. Then when we get our results back, 
we either log the status code or simply get hold of the data. */
app.get("/", function (req, res) {
  // send index.html over to the browser
  res.sendFile(__dirname + "/index.html");

});
// Catch our root route from the index.html POST Request - send back certain data we want to printout on the screen.
app.post("/", function(req, res) {
  const query = req.body.cityName;
  const apiKey = "4b33668b0a04a645d631d93fa31022dc";
  const unit = "metric"; // Convert the unit to metric. 
  // My own API from registeing an account on the Open Weather Map website.
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
  https.get(url, function (response) {
    console.log(response.statusCode); // code 200 - ok

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      // Get the piece of data we want from location 0. Arrays are zero based.
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      // String concatination to add the icon variable.
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      // Using template literal to printout the plain text with dynamic data on to the screen. Send the temp and the weather description.
      res.write(
        `<p>The weather is currently ${weatherDescription}.</p><h1>The tempature in ${query} is ${temp} degrees celsius.</h1>`
      );
            res.write("<img src=" + imageURL + ">");

      res.write(
        "<p><small>With this weather web app you can find the current weather condition for any city in the world.</small></p>"
      );
      res.write(
        "<p><small> Resource: <a href='https://openweathermap.org/api'> Open Weather Map</a></small></p>"
      );

      // Send back to the browser an image element that will display the image URL.
      res.send();
    });
  });
})



// Use port 3000 to run this app locally. Print out the below String to test that we are running of this port.
app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
