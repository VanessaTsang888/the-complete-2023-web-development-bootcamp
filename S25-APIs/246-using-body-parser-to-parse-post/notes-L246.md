# 246 Using Body parser to Parse POST

Get user to user to type in the city they want so we need to replace the query part of the API > such as: `Q=Paris`.
We need an input.
Separate our URL into x4 different parts/variables:

- query
- apiKey
- unit
- url

Then we update the query > index.html > 

Render index.html when user calls app.get() at the root route.

index.html > write the form with label and input and button elements. Catch our root route from the index.html inside our app.js. 

To get the text that user type into the input we have to install another package: `npm i body-parser`

## Testing
I've typeed the text of London inside of the input and clicked on Submit btn. Then the data appeared on the Terminal. This is what i expect. So I am receiving the data from our post request. Now we've passed through the body of request we can start using that. 
My weather app works as I tested using location of China and recieved data from server.

## Next up
Build our final project.