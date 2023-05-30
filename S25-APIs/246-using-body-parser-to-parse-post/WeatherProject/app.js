/* Both the entery to web application and the server as this is simple app for a user to input 
a city name to return the weather condition for that location. Registered for an account on the 
Open Weather Map website and generated my own API Key and used in this server file. */

// jshint esversion:6"
const express = require('express');
const https = require('https');
// Package/module to look through body of the post request and fetch the data based on the name of my input element which is cityName.
const bodyParser = require('body-parser');

// Store the express web app framework in to the app variable so we can use it later.
const app = express();
// Get our app to use the body parser that we required above.
app.use(bodyParser.urlencoded({ extended: true }));

/* The route to home page, callback func with request and response passed in as param's. 
Get data as JSON format, parsing it and fetching the specific items we want and send to browser/screen using
HTML using the res.write() func. */
// Express.js request and response objects are the params of the callback func.
// Send this file to the browser whereever its located to show text input.
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
/* Catch our root route from the index.html POST Request - send back certain data we want to printout on the screen.
Post the data requested by the user via the form/input field that they typed into. Catch data in our app.post(), 
use that query to structure our url and get data for that particular location using the https.get() method. */
app.post('/', function (req, res) {
  const query = req.body.cityName; // Will change this variable to: nameOfCity
  const apiKey = '4b33668b0a04a645d631d93fa31022dc'; // Authentication
  const unit = 'metric'; // Convert the unit to metric.
  // weather is the path. query is whatever city the user types in to the form. '&appid=' is the param.
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    query +
    '&appid=' +
    apiKey +
    '&units=' +
    unit;

  /* Call the GET method on the native HTTPS Node module. Then when we get our results back, we either log
  the status code or simply get hold of the data. Get data for that particular location using this method. */
  https.get(url, function (response) {
    console.log(response.statusCode); // code: 200 - ok
    // When we get the data then do the operations that is located in the body of this code block - execute it:
    response.on('data', function (data) {
      // Get data as JSON format, parse it and send to browser/screen using Express and Node modules.
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      // Get the piece of data we want from location 0 which is the first location as Arrays are zero based.
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      // String concatination to add the icon variable. I will change this to use Template Literal as that is ES6 and better for performance.
      const imageURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
      // Using template literal to printout the plain text with dynamic data on to the screen. Send the temp and the weather description.
      res.write(
        `<p><strong>The weather is currently ${weatherDescription}.</strong></p>`
      );
      res.write(
        `<h1>The tempature in <em style="color:red;"> ${query} </em> is ${temp} degrees celsius.</h1>`
      );
      res.write('<img src=' + imageURL + '>'); // Send to the browser an image element that will display the image URL.

      res.write(
        '<p><small>With this weather web app you can find the current weather condition for any city in the world.</small></p>'
      );
      res.write(
        "<p><small> <strong>Resource</strong>: I generated the API used in this app from the <a href='https://openweathermap.org/api'> Open Weather Map</a></small></p>"
      );
      // Send our JSON data to browser.
      res.send();
    });
  });
});

/* Use port 3000 to run this app locally. Print out the below String to test that we are running of this port.
Test in the UI: localhost:3000 */
app.listen(3000, function () {
  console.log('Server is running on port 3000.');
});
