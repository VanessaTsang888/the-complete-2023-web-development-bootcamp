# 240. API Endpoints, Paths and Parameters

## Paths:

[Joke API](https://SV443.net/jokeapi/v2/joke/Programming)
The Endpoint is the URL up to that last forward slash. The 'Programming' at the end is the 'path' which we specify if we want programming type jokes.
Data may have different categories such as jokes may have Dark Jokes etc. Path go at the end of the api.

## Parameters:

[Joke API](https://SV443.net/jokeapi/v2/joke/Programming?contains=debugging)

To give developers the flexibility to deal with custom queries, we have Parameters. These located at the end of the URL, and after the question mark.

`https://sv443.net/jokeapi/v2/joke/Programming?contains=debugging`

Then there is a key-value-pair that goes into the URL - indicated by the equals oportator. The key is the 'contains', and the 'debugging' is the query.

Then the **_key-value-pair_** go into the URL which is the query.
The key is contains and the query is debugging.

### Queries

We can have multiple queries. The first one follows a question mark. Then after that follows with an '&'.

## Conclusion

We can see through the use of paths and prameters we able to narrow down on the data that we get back from the joke API to the precise thing that we want.
`https://sv443.net/jokeapi/v2`
Take a look at the docs to see what type of data we can get back from the API
