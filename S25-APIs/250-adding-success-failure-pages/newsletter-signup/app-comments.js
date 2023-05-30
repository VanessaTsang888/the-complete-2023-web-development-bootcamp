/****************************************************************************************************************** 
This code file is both the server and the app entry point as this is a simple dynamic web app. 
This newsletter signup form uses a third party API, we customise the response we get from the external server.
Bootstrap is used for the frontend - the structure and styling of the signup form, refer to my screen shots.
******************************************************************************************************************/
// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https"); // Call the https module and require it. Save it into variable (on the left) that I've declared with a constant.

// Declare our app constant and store a new instant of Express.js inside the app variable/object.
const app = express();
// Specify, use static folder public where all our static files are located as need pages to be dynamic.
app.use(express.static("public"));
// Use url encoded func of the body parser, set extended to true. this func is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(bodyParser.urlencoded({ extended: true }));

// Setup GET method for home route (signup page) to test it on browser at localhost:3000.
// This callback func routes the HTTPS Get Request to the path which is being specified with the callback func.
// Deliver the file at the current directory name plus the string with location of our html file inside (relative path).
// When we request the home route from our server, then it should deviver the file at that directory.
// Send/transfer this html file as it contains the data entered by user and we need to save this data, then post the sucsess or failure page.
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

// Send post request to our home route. Use body-parser to get the data from the signup form, and log it.
// Pull up the values of those things inside our form.
app.post("/", function(req, res) {
  const firstName = req.body.fName; // Store value on the right into variable on left. fName is the name of our input in html file.
  const lastName = req.body.lName;
  const email = req.body.email;

  // Create our own data object as 3D JSON. Create our key-value-pairs with keys that Mailchip will reconise (see Mailchimp site) such as FNAME, known as merge fields to Mailchimp.
  // members key-value-pairs is from on Mailchimp site. Send this data to Mailchimp.
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

  // Turn the above 3D JSON into a flat-pack JSON. Pass-in our data to turn it into a string and send to Mailchimp server.
  const jsonData = JSON.stringify(data);

  // My list id (also known as the Endpoint) is the last part of this api which I generated from my MailChimp Developer account.
  // URL will come from the main Mailchimp api endpoint. Then after the last forward slash its my list id/endpoint. Subscribe my members into this list.
  const url = 'https://us18.api.mailchimp.com/3.0/lists/c84cb44d41';

  // Create some options. We can use anything as our UN (I used: van8), the PW MUST to be our api key (after UN and colon).
  // I think api key is the Endpoint? auth is: Authentication. The region of us18 matches with the region in my url.
  const options = {
    method: 'POST',
    auth: 'van8:a78e6c2ffab169efa158758d9e612f62-us18', // van8 is my username. The api key (generated from my account in MailChimp) is the PW.
  };

// Make our request using the HTTPS standard req method to POST data to external resource > Mailchimp.
// Save our req in a variable so we can then send it over to Mailchimp server by calling request.write() later.
  const request = https.request(url, options, function (response) {
    // Do a check by using a conditional: If the error code in the Express response object is same as 200, then execute the code within the
    // body of that clause. Otherwise, execute the code within the body of the else clause.
    if (response.statusCode === 200) {
      res.sendFile(__dirname + '/success.html'); // Use the sendFile method from the response object to deliver this html file with Express.js
    } else {
      res.sendFile(__dirname + '/failure.html');
    }
    // When we get back a response, we going to Check what data they sent us. Parse the data and logout so we can see the data in the terminal/inspect the UI.
    response.on('data', function (data) {
      console.log(JSON.parse(data)); // which error code logged out?
    });
  });
  // Use the request object (with the https.request() func stored inside of it) to call write() func on it, pass in the JSON data
  // to the Mailchimp server. To specify that we're done with the request, we call end() func on the req object. Now a new member should be added - check our Mailchimp account.
  // Go to my Mailchimp account > Audience > here I should have a new contact with the user's details they've submitted in the form on the UI. 
  request.write(jsonData);
  request.end();
});
// User has reached the failure page and want to go back to the signup page to try again.
// The failure route. Redirect user to the home route/the Signup page. This triggers the app.get() method above.
app.post("/failure", function (req, res) {
  res.redirect("/"); // Path to the Home route/the signup page. Redirect to here.
});

// Setup server to listen on port 3000. Localhost:3000
// Logout a plain string text within the body of this code block.
app.listen(3000, function () {
  console.log("Server is running on port 3000"); // Testing > inspect the UI > Console tab: error 404 as Milchip has frozen my account until I submit my ID to them but since this project is for training I'm not really happy to do so.
});

/* API KEY: a78e6c2ffab169efa158758d9e612f62-us18
list id or unique id: c84cb44d41
POST req to the /lists endpoint: {"name":"Freddie'\''s Favorite Hats", "contact":{"company":"Mailchip", "address1":"675 Ponce D Leon Ave NE", "address2":"Suite 5000","city":"Atlanta","State":"GA","zip":"30308","country":"phone":""}"permission__reminder":"You'\'''re receiving this email as you signed up for updates about Freddie'\'"subject":"", "language""en"}, "email__type__option":true} */
