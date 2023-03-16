# General Notes - Newsletter Signup Web App

From lectures 247 - 251:

- 247. the Mailchimp API - What you'll Make.
- 248. Setting Up the Sign Up Page.
- 249. Posting Data to Mailchimp's Servers via their API.
- 250. Adding Success and Failure Pages.
- 251. Deploying Your Server with Heroku.

## 251. Deploying Your Server with Heroku:
Heroku is no longer free to host dynamic applications. Therefore I am looking to use Glitch in stead as some of the other students have used this and it worked for them - as I found out from reading the FAQs the other week. At the moment I'm more concerned about understanding the actual development work using Node.js and Express.js.

## 247. the Mailchimp API - What you'll Make:

I can deploy and host this app as it is the most existing Node.js app out of all three I've developed within this Udemey training course. 

**This newsletter signup web app is a single page** as per the demo on this lecture. The url don't change - still on the same page when user clicks the signup button.

The data the user has submitted and arrived at the successful page gets sent to our list on Mailchimp and all of that data gets added into our list and our new subscriber. This means we can now send our newsletters or email campaigns to our subscribers. My list will build up as more and more users subscribe to our newsletter.

Once hosted, the URL is no longer a localhost anymore, its an actual https website and we can include this url in our social media such as Facebook etc.

## 248. Setting Up the Sign Up Page:

**Setup Instructions**
1. cd to where you want to create your new project.
2. Create new project folder called newsletter-signup.
3. Inside of that new folder, create a new app.js file, signup.html file, success.html and failure.html files.
4. Initialise npm with default options.
5. Install body-parser, express and request npm modules to the new project.
6. Require the newly installed modules inside app.js
7. Create a new express app and set it to listen on port 3000.
8. Once port is set up, log "server is running on port 3000".

**cmd to use for above steps**
1. `cd <the location>` # navigate to the location where I want to locate my new project.
2. `mkdir newsletter-signup` # make new project directory
3. `cd newsletter-signup` # navigate to that new project.
4. `touch app.js signup.html file, success.html failure.html` # create our new files.
Note: I think for larger projects, the server is called server.js and the app.js file is the entry point to the app, such as one of my DVLA projects.
5. `npm init` # Include basic project info to include in packages.json, and create a specific type of project such as Node.js 
6. `npm install body-parser express request` # Require the newly installed modules.
Open our project in VSCode.
7. Require the newly installed modules inside app.js
```js
// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
```
8. Setup server to listen on prot 3000
```js
// Declare our app constant and store a new instant of Express inside the app variable/object.
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
```
### HTML Page
We need to develop a HTML page that has a signup form on it. To cut dwon on frontend development time, we use **Bootstrap**.

[Bootstrap > examples > Sign-in](https://getbootstrap.com/docs/5.3/examples/)

- Right click to view page source.
- Copy all off the code, and past it inside of our signup.html file.
- Right click this file > select: copy full path > past into a new browser window. This is our starting point which we need to edit to make it look a lot better. The elements are not Bootstrap at the moment.
- Enable Bootstrap in our app.
- Go back to the Bootstrap getting started page and copy the Bootstrap CDN code, and past over the line of link element under the Bootstrap core CSS comment. Now we have the Bootstrap elements enabled such as the font etc.
- Now we need the Bootstrap custom core CSS stylesheet for this template. To find this template click the signin.css link.
- Copy all that customer css, create a new file called styles.css and past the code in here.
- Change the link element under the "Custom styles for this template" comment to refer to our styles.css file.
- Refresh our site. Now we are very close to our desire look for our frontend of our web app. Just need to modify the words, inputs, the button to fit our project. 
- Inside of signup.html > change our form, change the title elment at the top to: Newsletter Signup.
- Replace the Bootstrap brand logo to our own logo. Create new directory public and image and save our new logl inside the image directory or folder. Update the image element so that the source is refering to our new logo: `images/appBrewery-logo.png`.
- Update the text within the various elements such as the <h1> to state: Signup to My Newsletter.
- Change the input fields so we have First Name, Last Name and Email Address.
- Delete some of the elements that we don't need such has some of the inputs and the checkbox- In the sytles.css file, tidy up the styles for the three input fields.
- To make our app from a static page to a dynamic page, we need to set up the GET() method for our home route. Setup uor the get route to our signup page to test it on the browser at localhost:3000.

When we start a project its normal to use both express.js and body parser. Therefore, keep a copy of this **boiler plate code** or snipet of codes and use it for every new project.

```js
// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https"); 

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
```

## 249. Posting Data to Mailchimp's Servers via their API:

Written code comments within the app.js file. Will tidy that up right at the end.

## 250. Adding Success and Failure Pages:
**The Problem**
Once user has submitted there details they should be navigated to either the success or failure page. 

How can we figure out what response code we got back after making this HTTPS request? If response code is 200 it means ok, so we can send user our success page. Otherwise, the response is a different code, we going to send them the faure page.

**The Solution**
Use an if-else conditional statement to evaluate a condition such as:
if the error code is xxxx, then execute the oporation in the body of this if-clause. Otherwise execute the operation within the else clause.

### Bootstrap
Use a CSS framework called Bootstrap to help us develop our success and failure pages to save us time on the frontend development work.

[Bootstrap Jumbotron-style component](https://getbootstrap.com/docs/5.3/examples/jumbotron/)

Use the Bootstrap Jumbotron code in failure page and edit it. Copy the Bootstrap custom CSS stylesheet from the signup.html and past in failure and success pages. 

**Try Again Button**
Large yellow btn to navigate user back to the Signup page so they can try again. This button will use Bootstrap class of: btn btn-lg btn-warning

