# 251. Deploying Your Server with Heroku

**_Its GoLive time!_**
At the moment we are hosting locally via localhost:3000 but we want our web app on the World Wide Web so anyone can access our Newsletter. We can't use any servers that only support static content such as localhost and GitHub pages and we don't want to build our own service stack which are noisy servers running 24/7 - hardwork. We going to rent some servers from [Heroku](https://www.https://www.heroku.com) - up-to 5 projects for FREE.

Heroku will host my server to keep our dynamic site live on the internet. Once our app get popular and I get lots of req to our server then we can scale it up dynamically with Heroku just by using a slider bar. Then we start paying them.

**_Sign up for their services_**

1. choose Node.js apps
2. click btn: I'm ready to start.
3. Use the step by step guide to upload our code and make server GoLive.

**_Setup_**
https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

Check versions use below cmd:

$ heroku --version
$ node --version # can also use: node -v
$ npm version
$ git --version

I have installed the the Heroku CLI.

## Prepare the app

We not going to follow their steps as we going to prepare our own app. We need to update our app so it will work on Heroku.
-> app.js > update from localhost to Heroku and localhost:3000

### Define a Procfile

We've been launching our app using nodemon to get our changes updated in the background.

$ touch Procfile
How to Launch our app and which file contains our server code
$ web: node app.js
This can be called something else such as server.js or index.js etc.

### Save our work to Git

Initialise new git repo:
$ git init
Git allows us to save different versions of our work/code > each and every time point of our work so we can roll back in time.

Add all files in this current repo:
$ git add.
$ git commit -m "first commit" # use the m flag to add a message.
Now deploy, just as you did previously:
$ git push heroku main
$ git push heroku master

### Deployment

Procfile:
The training course states to create a Procfile and add this: web: node app.js

However, the official docs states to add this: web: npm start
Which is correct? I've tried both but no luck.
