# 250. Adding Success and Failure Pages

Currently our site hangs and times out once user has submitted their details. We can fix this by developing adding a Success and a Failure Page.

Task 01: How can we know what response code we got back after making this HTTPS request?

If code is 200 then it means ok, so we send the user a piece of text to display in the site. But if the code NOT 200, then we send user a different msg.

We know that we can get hold of the response object that we get back from making the req and we can tap into the status code to see whether if it was 200 or whether if it was something else.

Is the status code is 200? If so then display something on the screen.

```js
const reuest = https.request(url, options, function (response) {
  if (response.statusCode === 200) {
    res.send("SuccessFully Subscribed");
  } else {
    res.send("There was an error with signing up, please try again.");
  }
});
```

If the authorisation value is wrong then the plain text in the text within the else clause will get displayed on screen.

## Files

The plain text works as messages but its very plain so we can use Bootstrap again and within the `sccess.html` and the `failure.html` files. Then update the `signup.html`.

### Bootstrap > Jumbotron

https://getbootstrap.com/docs/5.3/examples/jumbotron/

Add a Jumbotron to our site > copy/past the code into the `sccess.html` and the `failure.html` code files.

### Update app.js

Instead of sending the plain text msg, we need to send the success and failure webpages.

```js
const reuest = https.request(url, options, function (response) {
  if (response.statusCode === 200) {
    res.sendFile(__dirname + "/success.html");
  } else {
    res.sendFile(__dirname + "/failure.html");
  }
});
```

## Testing

Test to find out if we can display the content within the success.html page.
Run the app.js server: `nodemon app.js`

Test to find out if we can display the content within the success.html page.
