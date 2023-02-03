# 248. Setting Up the Sign Up Page

Setup the project

- mkdir newsletter-signup
- cd newsletter-signup
- touch app.js signup.html success.html failure.html
- npm init
- npm install body-parser express request

1. Require the modules we just installed > x3 lines of code.
2. Make our app to use Express framework.
3. Setup server to listen on port 3000.

## HTML Page for Sign up form

We need to create a html page that has a sign up form on it.
Use Bootstrap to help us to speedup our development time. Examples that allow you to quickly get a project started.
Custom components > Please sign in > we'll use this one > view page source: copy/past code into signup.html

Bootstrap CDN site > take the styles > into same html file.

````html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
/>
``` 10:37
````

### Setup GET method for home route

Setup GET method for home route. Deliver the file at the dir name.
Use Nodemon to run our server: nodemon app.js

Use express static > public dir.

### POST Route

Program the POST route using body-parser to grab the data from the signup form and log it to server. We already required it so we just need to tell our app to use it.

Now I have setup the signup page and got the data from input fields logged in GitBash.

### Next Up

Setup webpage with Mailchip API to start sending data over to their servers.
