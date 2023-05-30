//jshint esversion:6"
const express = require("express");
// const https = require("https");
const https = require("node:https");
const app = express();

// This should log status code 200
const endPoint =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=4b33668b0a04a645d631d93fa31022dc&units=metric";
const city = "?q=London";
const units = "&units=metric";
const appid = "&appid=YOUR API HERE!";
const url = endPoint + city + units + appid;

https.get(url, (response) => {
  console.log(response.statusCode);
});

// To make the data human readable > JSON formated data
https.get(url, (response) => {
  response.on("data", (data) => {
    const weatherData = JSON.parse(data);
  });
});
