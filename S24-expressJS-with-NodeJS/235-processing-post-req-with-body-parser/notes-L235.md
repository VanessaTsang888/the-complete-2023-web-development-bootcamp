# 235. Processing Post Requests with Body Parser

1. Run app using Chrome `nodemon calculator.js`
2. Inspect the UI > Networks tab > select the All tab.
3. Test our form by type in a First Num and a Second Num and click the Calculate Now btn.
4. All the Network req get logged in Networks tab but the index.html in red has 404 error code

## Bug

I just noticed a bug in my index.html and have now fixe it and run the app again. Now, I am getting the error that I expect in the UI: Cannot POST /index.html
and the 404 error code for the index.html in the Networks tab.

### Cannot POST /index.html

This means that cannot post to the index.html file.
Our form has an action and a method. The method is the POST method so we're sending this data somewhere which is defined by the action attribute > index.html > not what we want as we want to send to our server/calculator.js which is at our home route location - just the forward slash.

`<form action="index.html" method="post">`
Change file name to just a slash will return the data in the Network tab > localhost file > Headers tab > scroll down to Form Data > Payload > here is the data or the user's input we geeting access to:

```js
num1: 20
num2: 30
submit:
```

#### Error Code 404

This can happen so we should catch this error code.
a list of all status codes is on:
https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

Currently our server don't have a way of processing a POST req / not accepting anyone to post on our home route. To fix this we write a POST method. This will change our status code from 404 to 200 meaning 'successful HTTP request'.
Now we get the correct msg in UI and the error code of 200 within the Network tab:

```js
app.post("/", function (req, res) {
  res.send("Thanks for posting that.");
});
```

### Tap into form data

we tap into these pieces of from data - get the data into the callback func within the POST method so we can calculate the output, then send the result back to the browser. To do this we need to install another NPM package called Body Parser.
`npm install body-parser`

This allows us to pass the info from the post req. We pass it so that we have access to props and variables so we can do our calculations. It is now inside of our package.json as one of our dependancies, we can go to our server - calculator.js and require it so we that we incorporate that package into our project.

`const bodyParser = require("body-parser");`

Now get our app to use it. Body Parser works with Express. We going to try to parse data that comes from an HTML form whenever we trying to grab the info that gets posted to your server from an HTML form, we use `urlencoded method`. Also, use the option of extended and add in value of: true. This value allows us to post nested objects. We use body-parser as it allows us to go into any of our routes, tap into something called `request.body` Try to make a post req: console.log(req.body.num1);
This will log the result of calculation in our Terminal within Code IDE.

### Test in UI 01

I have tested the console.log() in the UI and I receive 20 in my Terminal which is correct since the prop name is assigned a value of num1 which is 20 as I've input into the first number field in the UI.

```js
// The users input value they input into first input field gets stored inside of: req.body.num1
app.post("/", function (req, res) {
  console.log(req.body.num1);

  res.send("Thanks for posting that.");
});
```

Now we know how to tap into these values, then making our calculator is super simple. Make a simple calculator that adds to nums.

```js
// Print out whatever the result is for user's calculation they input into the two fields.
res.send("The result of your calculation is " + result);
```

At the moment the values are Strings rather than Number values so we need to change that so our calculation works as expected. Therefore, use the JS Number method.

### Test in UI 02

Test in UI again and it works as the printout is 50 which is what I expect since I input 20 in first field and 30 in second field.

In the UI > right click - View page source > this is all the borwser/client get to see > just a plain and simple HTML site. We don't see any of the JS code that was executed to calculate the numbers. Our code is running in the BE and not having static files being rended and loaded up and having our JS run on the client side or FE.
