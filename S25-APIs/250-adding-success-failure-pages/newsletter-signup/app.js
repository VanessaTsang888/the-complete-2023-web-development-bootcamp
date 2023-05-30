// jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
import 'bootstrap/dist/css/bootstrap.min.css';

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

//  Setup GET method for home route. Deliver the file at the dir name.
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/signup.html');
});

// Program the POST route. Log the user's input using body-parser
app.post('/', function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  // Create our own data as 3D JSON. Create our key-value-pairs with keys that Mailchip will reconise such as FNAME.
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  // Create a flat-pack JSON.
  const jsonData = JSON.stringify(data);
  const url = 'https://us18.api.mailchimp.com/3.0/lists/c84cb44d41';

  // Create some options. We can use anything as our UN but the PW has to be our api key.
  // members key-value-pairs is from on Mailchimp site. Send this data to Mailchimp.

  const options = {
    method: 'POST',
    auth: 'van8:a78e6c2ffab169efa158758d9e612f62-us18',
  };

  // Make our request using the HTTPS standard req method to POST data to external resource.
  // Check if Error code is 200 or something else?
  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + '/success.html');
    } else {
      res.sendFile(__dirname + '/failure.html');
    }
    response.on('data', function (data) {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
});

// The failure route, redirect user to the home route. This triggers the app.get() method above.
app.post('/failure', function (req, res) {
  res.redirect('/');
});

// setup server to listen on port 3000
app.listen(3000, function () {
  console.log('Server is running on port 3000');
});