# 245 Using Express to Render a Website with Live API Data

Duration 2:30:
I have used template literal to printout some plain text with the temp data and the weather description data. See my screen shot.

## The Weather Codition Code:
https://openweathermap.org/weather-conditions
This is the `"id": 500` key-value-pair under the weather response field. They corrispond to a weather condition and we get back an icon name `"icon": "10n"` xx

***How to get icon URL***
For code 500 - light rain icon = "10d". See below a full list of codes
URL is http://openweathermap.org/img/wn/10d@2x.png

Send back to the browser an image element that will display the image URL.

```js
res.write("<img src=" + imageURL +">");
```
it worked as I have icon of light rain with a cloud with part of a sun behind it, thank to being able to get live data from an API, making an HTTPS get request to get the data as a JSON format, parsing it and fetching the specific items that we want, and then sending it back to the browser using the html that we want to write.

### Next Up
Make a POST request from our website so that user could log onto site and type-in a particular city and then we can give them the actual weather for that city.