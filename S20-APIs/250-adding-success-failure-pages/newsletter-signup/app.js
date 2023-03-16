/********************************************************************************************************* 
app.js: both the server and the app entry point as this is a simple web app. This newsletter signup form 
uses a third party API (external server), Bootstrap for the structure and styling of the signup form -
 frontend development). See my screen shots within this project.
***********************************************************************************************************/
// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https"); // Call the https module and require it. Save it into the variable that I've declared with a constant.

// Declare our app constant and store a new instant of Express inside the app variable/object.
const app = express();
// Specify and use our static folder public where all our static files are located.
app.use(express.static("public"));
// Use url encoded method of the body parser, and set extended to true.
app.use(bodyParser.urlencoded({ extended: true }));
// Setup our the get route to our signup page to test it on the browser at localhost:3000.
// Setup GET method for home route. This callback func routes the HTTPS Get Request to the path which is being specified with the specified callback func.
// Deliver the file at the current directory name plus the string with location of our html file inside.
// When we request the home route from our server, then it should deviver the file at that directory.
// Send or transfer this html file as it contains the data entered by a user and we need to save this data to then post the sucsess or failure html page.
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

// PSend our post request to our home route. Use body-parser to get the data from the signup form, and log it.
// Pull up the values of those things inside our form.
app.post("/", function(req, res) {
  const firstName = req.body.fName; // Save this value into the variable we just declared. fName is the name of our input in html file.
  const lastName = req.body.lName;
  const email = req.body.email;

  // Create our own data object as 3D JSON. Create our key-value-pairs with keys that Mailchip will reconise (see their site) such as FNAME - know as merge fields to Mailchimp.
  // members key-value-pairs is from the Mailchimp site. Send this data to Mailchimp.
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

  // Turn the above 3D JSON in to a flat-pack JSON. Pass-in our data to turn it in to a string  and send to Mailchimp.
  const jsonData = JSON.stringify(data);

  // My list id the last part with this api which I had generated from my MailChimp Developer account. I think its also known as the Endpoint?
  // URL will come from the main Mailchimp api endpoint. Then after the forward slash its my list id/endpoint. Subscribe my members in to this list.
  const url = 'https://us18.api.mailchimp.com/3.0/lists/c84cb44d41';

  // Create some options. We can use anything as our UN but the PW has to be our api key.
  // I think api key is the Endpoint? auth: Authentication. The region of us18 matches with the region in my url.
  const options = {
    method: 'POST',
    auth: 'van8:a78e6c2ffab169efa158758d9e612f62-us18', // van8 is my username. The api key (generated from my account in MailChimp) is the PW.
  };

// Make our request using the HTTPS standard req method to POST data to external resource.
// Save our req in a variable so we can then send it over to Mailchimp server by calling request.write() later.
  const request = https.request(url, options, function (response) {
    // Do a check by using a conditional: If the error code in the Express response object is 200 then execute the code within the
    //  body of that clause. Otherwise, execute the code within the body of the else clause.
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
  // Use the request variable/object (with the https.request() func stored inside of it) to call request.write() func on it, pass in the JSON data
  // to the Mailchimp server. To specify that we're done with the request, we call request.end() func. Now a new member should be added.
  // Go to my Mailchimp account > Audience > here I should have a new contact with the user's details they've submitted in the UI. 
  request.write(jsonData);
  request.end();
});
// User has reached the failure page and want to go back to the signup page and try again.
// The failure route. redirect user to the home route - the Signup page. This triggers the app.get() method above.
app.post("/failure", function (req, res) {
  res.redirect("/"); // Path to the Home route - the signup page.
});

// setup server to listen on port 3000. Localhost:3000
// Logout a plain string text within the body of this code block.
app.listen(3000, function () {
  console.log("Server is running on port 3000"); // Testing > inspect the UI > Console tab: error 404 as Milchip has frozen my account until I submit my ID to them but since this project is for training I'm not really happy to do so.
});

/*: 
API KEY: a78e6c2ffab169efa158758d9e612f62-us18
list id or unique id: c84cb44d41
POST req to the /lists endpoint: {"name":"Freddie'\''s Favorite Hats", "contact":{"company":"Mailchip", "address1":"675 Ponce D Leon Ave NE", "address2":"Suite 5000","city":"Atlanta","State":"GA","zip":"30308","country":"phone":""}"permission__reminder":"You'\'''re receiving this email as you signed up for updates about Freddie'\'"subject":"", "language""en"}, "email__type__option":true}



*/
