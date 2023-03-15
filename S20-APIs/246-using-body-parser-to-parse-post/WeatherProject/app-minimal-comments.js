/* Both the entery to web application and the server as this is simple app for a user to input 
a city name to return the weather condition for that location. Registered for an account on the 
Open Weather Map website and generated my own API Key and used in this server file. */

// jshint esversion:6"
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser"); 

// Store the express web app framework in to the app variable so we can use it later.
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// The route to home page, callback func with Express request and response objects passed in as param's. 
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
// Catch our root route from the index.html POST Request - send back certain data we want to printout on the screen.
app.post("/", function(req, res) {
  const query = req.body.cityName;
  const apiKey = '4b33668b0a04a645d631d93fa31022dc';
  const unit = 'metric';
// weather is the path. query is the city user types in to the form. '&appid=' and '&units=' is the params. We only want partular data from the API.
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    query +
    '&appid=' +
    apiKey +
    '&units=' +
    unit;

// Call the GET method on the native HTTPS Node module.
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on('data', function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';

// Using template literal to printout the plain text with dynamic data on to the browser.
      res.write(
        `<p><strong>The weather is currently ${weatherDescription}.</strong></p>`
      );
      res.write(
        `<h1>The tempature in <em style="color:red;"> ${query} </em> is ${temp} degrees celsius.</h1>`
      );
      res.write('<img src=' + imageURL + '>');

      res.write(
        '<p><small>With this weather web app you can find the current weather condition for any city in the world.</small></p>'
      );
      res.write(
        "<p><small> <strong>Resource</strong>: I generated the API used in this app from the <a href='https://openweathermap.org/api'> Open Weather Map</a></small></p>"
      );
      res.send();
    });
  });
})

// Use port 3000 to run this app locally. Test in the UI: localhost:3000
app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
