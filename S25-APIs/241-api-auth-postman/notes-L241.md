# 241. API Authentication and Postman

Last lecture we used path and parameters to narrow down on the exact data we want to use. We make these requests using a formatted URL and putting it through our browser.

## Authentication

[Open Weather Map](https://openweathermap.org/api)
Look at their Endpoint > before the question mark.

So the API provider can montior and limit how much of their data we can use. They do this throuh **_Authentication_**. They have to monitor us on how often we use their server to get data and limit us coordinly or cut us off if we don't follow their rules in we use their data. To illustrate the concept of Authentication, we use the Open Weather API.
How to use an authenticated API. The order where we put the parameters don't matter.

The first parameter get added after a question mark and starts with letter 'q'. The next parameter is after the ampersand, in a key-value-pair and separated by an equals sign. Every subsequent parameter gets added after an ampersand.

SignUp/Create an account for free account:
> Gmail 01.
> My key: 4b33668b0a04a645d631d93fa31022dc
> https://openweathermap.org/api > how we can get weather data
> example api call > https://api.openweathermap.org/data/2.5/weather?q=London&appid={API%20key} > to make actual api call we need to look at the actual api endpoint: 
> Generated new api but no luck: 4b33668b0a04a645d631d93fa31022dc > https://api.openweathermap.org/data/2.5/weather?q=London&appid,uk&appid=4b33668b0a04a645d631d93fa31022dc

I want results back in celsius so at end of URL add: &units=metric
https://api.openweathermap.org/data/2.5/weather?q=London&appid,uk&appid=4b33668b0a04a645d631d93fa31022dc&units=metric

The order we put the param's don't matter. When we use param's more when we have them with very long values it get difficult to test our APIs so we need to use Postman to edit our APIs.

## Postman

When using APIs in URL with long values, gets difficult to see when each parameters end and next one begins. This is why often when testing APIs we use Postman in stead of trying to use the URL of a browser.
Postman is the collaboration platform for API Development.
I have my own free Postman account. I've tried to make an req but the Send btn is gray-out so I can send it - see my screenshot. Therefore, I'm not getting the data pretty printed in JSON format. Therefore, I've not been able to authenticate myself using Postman.

We can make the same request that we did but using Postman as this tool makes our job easier.
We use Postman to test APIs and get data back in JSON format. Postman displays the data in a friendly readable JSON format for us to analyse.

1. Paste this first part of API in the URL field with the dropdown of GET selected: api.openweathermap.org/data/2.5/weather
2. For Parameters, its 'q' as we going to search by city so for KEY we type 'q'. For VALUE field, type in 'London'. Now at the top it is starting to structure our URL for us.
3. This UI is much clearer as has tables, checkbox for us to add or remove and it saves the data if we want to use later.
4. Next checkbox: Add the appid and paste in the key.
5. Change the units to metric: KEY: units | VALUE: metric.
6. Click send to send our req to Open Weather Map and we get back our data which is located at the bottom and structured in a friendly JSON format > pretty printing the results.

Now my API test in Postman has passed as I have been able to send a request and received the response in JSON format. See my screen shots.
