# 244 How to Parse JSON

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

I logout the status code in the Terminal using this code:
```js
    console.log(response.statusCode);
```



Error codes > 404 Not Found > Resource not found. We can trigger one of these 404 by create an error to one of the paths witin the API > 

```js
  response.on("data", function(data) {
    console.log(data);
// In Terminal, will printout:
      session: <Buffer 30 82 07 98 02 01 01 02 02 03 03 04 02 c0 30 04 20 2b 03 5d 0c 2e 5c 93 b7 0b 25 b4 db 8f ea 4e 94 48 5f 7b 8b 7b dd 60 de 09 2a d0 04 ef 0f 3e 92 04 ... 1898 more bytes>,
```

Convert this data into JS Object - no Strings.
```js
const WeatherData = JSON.parse(data)
```

## Task 01
Printout the weather description.

## Next up
In next lesson we will take the below 2 pieces of data and put the data into an HTTP website that we can display to our user by using nodemon and express.
