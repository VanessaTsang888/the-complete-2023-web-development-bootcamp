# 230. Understanding and Working with Routes

The second parameter for app.get() method - we are targeting the home route: "/", then respond with the callback func.

## Route for contact page

We can respond with different routes:
We can specify what user should get on screen for different routes or different page.
Can write a route for the contact page. Restart server to see the output on UI.

## Route for about page

I have create a route for the about page with a response of some text about me to display on the screen. See server.js file.

We can set up as many routes as we like. We can have a page for our hobbies, for our CV etc. This is a lot easier than having to create a about.html, contact.html etc. Now we don't need to rely on html files.

### Nodemon

A utility to install using NPM that will monitor for changes in our source code, and it will auto restart our server when it detects any changes in our code.
Install in my route dir so its availabe across all my projects.
`npm install -g nodemon`

I've installed and tested nodemon:

1. writen new route for hobbies page which returns unordered list of my hobbies, saved.
2. In the UI i naviaged to the hobbies page and can see new content as expected.
3. Made another change and refreshed browser and can see that update on my content.
   This means means Nodemon works as I don't need to manually restart my server.

   #### Next up

   Get our server to do a lot of our code processing and make all of the code run on our backend rather than our frontend.
