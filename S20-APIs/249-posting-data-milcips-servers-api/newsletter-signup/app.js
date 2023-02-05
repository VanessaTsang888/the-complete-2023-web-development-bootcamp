// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
// call the http module and require it.
const https = require("https");

const app = express();
// Use express static to specify a static fold which is the public dir where we have our styles file and image file.
app.use(express.static("public"));
// use the url encoded of body-parser and set extended to true
app.use(bodyParser.urlencoded({ extended: true }));

//  Setup GET method for home route. Deliver the file at the dir name.
//  Use Nodemon to run server: nodemon app.js
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

// Program the POST route. Log the user's input using body-parser
app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  // Create our own data as 3D JSON. Create our key-value-pairs with keys that Mailchip will reconise such as FNAME.
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  // Create a flat-pack JSON.
  const jsonData = JSON.stringify(data);

  const url = "https://us18.api.mailchimp.com/3.0/lists/c84cb44d41";

  // create some options. We can use anything as our UN but the PW has to be our api key.
  const options = {
    method: "POST",
    auth: "van8:a78e6c2ffab169efa158758d9e612f62-us18",
  };

  // Make our request using the HTTPS standard req method to POST data to external resource.
  // Get a resp from the Mailchimp server. https://nodejs.org/api/https.html#https_https_request_url_options_callback
  const request = https.request(url, options, function (response) {
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });
  // Use the request by call request.write() method, pass JSON data to Mailchip server. To specify we are done with the req we call request.end()
  request.write(jsonData);
  request.end();
});

// setup server to listen on port 3000
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

/*: 
API KEY: a78e6c2ffab169efa158758d9e612f62-us18
list id: c84cb44d41
POST req to the /lists endpoint: {"name":"Freddie'\''s Favorite Hats", "contact":{"company":"Mailchip", "address1":"675 Ponce D Leon Ave NE", "address2":"Suite 5000","city":"Atlanta","State":"GA","zip":"30308","country":"phone":""}"permission__reminder":"You'\'''re receiving this email as you signed up for updates about Freddie'\'"subject":"", "language""en"}, "email__type__option":true}



*/
