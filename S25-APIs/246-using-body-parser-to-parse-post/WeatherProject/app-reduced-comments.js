/* Both the entery to web application and the server as this is simple app for a user to input 
a city name to return the weather condition for that location. Registered for an account on the 
Open Weather Map website and generated my own API Key and used in this server file. */

// jshint esversion:6"
const express = require('express');
const https = require('https');
// Package/module to look through body of the post request and fetch the data based on the name of my input element which is cityName.
const bodyParser = require('body-parser');

// Store the express web app framework in to the app variable so we can use it later.
// Get our app to use the body parser that we required above.
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// The route to home page, callback func with Express request and response objects passed in as param's.
// Send this HTML file to the browser whereever its located.
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
/* Catch our root route from the index.html POST Request - send back certain data we want to printout on the screen.
Post the data requested by the user via the form they typed into. Catch data in our app.post(), 
use that query to structure our url and get data for that particular location using the https.get() method. */
app.post('/', function (req, res) {
  const query = req.body.cityName;
  const apiKey = '4b33668b0a04a645d631d93fa31022dc'; // Authentication
  const unit = 'metric'; // Convert the unit to metric.
  /* URL: weather is the path. query is whatever city the user types in to the form. '&appid=' and the 
'&units=' is the params. We only want partular data from the API. */
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    query +
    '&appid=' +
    apiKey +
    '&units=' +
    unit;

  /* Call the GET method on the native HTTPS Node module. Then when we get our results back, we either log
the status code and get hold of the data. Get data for that particular location using this method. 
response.on method: when we get the data then execute the operations in the body of this code block 
console.log statement: the output is code 200 - ok.
Get data as JSON format, parse it and send to browser using Express and Node modules.
Get the piece of data we want from location 0 which is the first location as Arrays are zero based.
for the image URL, using string concatination to add the icon variable. Will refactor to use Template Literal 
- ES6 and better for performance. */
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on('data', function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';

      /* Using template literal to printout the plain text with dynamic data on to the browser.
Send the tempature and the weather description data to browser.
Send to the browser an image element that will display the weather icon. 
Send our JSON data to browser. */
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
});

/* Use port 3000 to run this app locally. Print out the String of plain text within the body of code block to test that we are running of this port.
Test in the UI: localhost:3000 */
app.listen(3000, function () {
  console.log('Server is running on port 3000.');
});
