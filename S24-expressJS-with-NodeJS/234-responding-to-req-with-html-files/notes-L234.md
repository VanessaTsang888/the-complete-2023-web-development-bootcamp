# 234. Responding to Requests with HTML Files

Expore and use html forms.
Put our knowledge of JS, Node, Express to use in our site. Make use of the data in our form and perform calculations on it in our server.

1. inside of the calculator dir create new file called index.html
2. Write code to develop a form.
3. send this file when browser tries to access the home route.
4. To send entire web page: https://expressjs.com/en/4x/api.html#res > res.sendFile(path [, options] [, fn])
5. `\_\_dirname` > run the index.html no matter where it is. Run nodemon to see the entire file path where this file is located.
6. this path will reach index.html file.
7. Save our files and nodemon will update our server and we just refresh our browser.
   It works as I have the form in the UI as expected.

## Next Up

Make post req from our index.html
