# 243. Making GET Req with the Node HTTPS Module

Putting APIs into Practice:
Now we know how to use APIs to get data from various servers or websites, its time to put into practice and get these pieces of data from an API and then use it inside our own web apps.

Diagram:
Client Browser is our user who tying in our web address into their browser. This will make an req to our Server, will be a GET Req > will try to get the HTML, CSS and JS from our Server. At this point server should return all of those pieces of data/files in the response. But to do this from someone eleses server, we make a req to that other server and again a GET Req and in response they will give use the data that we need. We going to do this via their API - their menu that they provided for us to make our requests. They specified what are the parameters, paths, and key-value-pairs we need to pass over, to get the resp and the data we need. Then we can use that data on our site.

## Example web app

We can develop a weather app using API from external server and display the temperature in a certain country in degrees celcious to our users. Also a weather symbol for weather condition there.

### Create a new project

- Create a new dir: `mkdir WeatherProject`
- Navigate into this project: `cd WeatherProject`
- Create a new file called `index.html` and `app.js`: `touch index.html app.js`
- Initialise NPM: `npm init`
- Using NPM install Express package: `npm i express`. This will download the node moduels.
- Open my project inside of Code IDE: `code .`

### Snippet for app.js

Syntax for a starting point for creating a node app. I've added my code comments.

### Run our Node app

use Nodemon to do this: `nodemon app.js`
Now the response is logging as I can see the plain string on my GitBash which is what I expect.
In browser, go to: localhost:3000 > I can see the same string on the screen which is what I expect. So I'm now all connect and ready to move on.

### Make Get Req to the Open Weather Map Server

This is instead of the plain text String.

## Ways to make a Get Req

Search: twillio.com/blog/2017/08/http-requests-in-node-js.html

- HTTP module - the Standard Library > `const htps = require('https');`

- The Request module.
- Axios library.
- Super Agent
- Got

The last 4 are external NPM Packages. We use the HTTPS Node.js module > https://nodejs.org/api/https.html > option to perform a GET Req > copy the https module, call the Get method on it, once we get our results back, we can either log the status code or just get hold of the data. This is what we'll use.

```js
const https = require('node:https');

https.get('https://encrypted.google.com/', (res) => {
console.log('statusCode:', res.statusCode);
console.log('headers:', res.headers);

res.on('data', (d) => {
process.stdout.write(d);
});
```

My GET Req gave me 200 code as I've fixed my error code 400 by generating my own API from the Open Weather Map website. Then I tested that using Postman which passed.


