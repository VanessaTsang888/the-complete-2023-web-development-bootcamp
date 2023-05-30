# 228. Handling Requests and Responses: the GET Request

Got in touch with localhost:3000 but couldn't get a response as our server not giving us anything to display.

## localhost:3000

This is the route of a website or the homepage. This is our domain we currently using.

## Response

Now add response code to our server.js

Add response code so we can get a response > GET request.
Call back annominous func. Print out the req Object when the
callback gets triggered and look on the UI.

```js
app.get("/", function (request, response) {
  console.log(request);
});
```

Info regarding the req displayed on screen.
The Response Object will print out Hello on screen.

### Short hand for express servers

Request: Req
Response: res

### Note

I have changed the object response to res and no longer getting an error in the UI.
