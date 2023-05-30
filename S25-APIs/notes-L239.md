# 239. Why Do We Need APIs?

**_A broad definition_**
Application Programming Interfaces (API) is a set of commands, func's, protocols, and objects that programmers can use to create software or interact with an external system.

## Examples of APIs

**_Yahoo weather forcast_**
If we want to know the weather forcast for our area we live in, we can use the Yahoo site as it has the weather forcast and we use that to search our area we live in. Therefore, we could use a moduel like this to create our own weather web app?

[Open Weather](https://www.openweathermap.com)
To get the data we could use a weather data service like Open Weather Map where their job is to collect these pieces of data and organise it and do all of the complicated things to forecast the weather. All we need to do is use their API to tap into that live weather data and we'll be able to start pulling into our site, just like how Yahoo does it.

**_Tinder_**
The dating web app Tinder do a similar thing as they get data from Facebook. Tinder is able to ask Facebook for these pieces of data on the user, and then it can use that data to populate these sections, and it will do that through the use of the Facebook API in order to get that data from Facebook.

## Types of APIs

There are lots of different types of APIs in the UK such as the Police API, which gives us granular data on where certain crimes have happened, on things like what happened with that crime, who was involved and a whole lot of things. Through the use of an API like this, people are able to build interesting sites like kthis one Murder Map which takes the police API and it maps out all the murders that take place in London by location as well as by weapon, by date, and by the age and gender of the victim. This site is useful for those who are trying to decided where they wish to live.

There are APIs that will give you data on various stocks, APIs that give us data on various Pokemon's etc. So we can access all types of data from different APIs and use them to develop all kinds of sites.

### Restaurant > Kitchen

We can't just go into a kitchen within a restaurant and help ourselves with whatever we want as somethings are not for sale. This is why restaurants have a menu for customers to choose what meals they want. This is similar to APIs which has data that we have access to but no access to certain data since those are not our business.

**_How do we know what data we can access?_**
An API is a contract between the data provider such as the Open Weather and the site developer. Essentially the contract says: all the things that developers can acess and these are the methods, the objects, the protocols that you would use to access them with.

### jQuery

jWuery is an API gives us access to a whole bunch of functions and objects that let us create software easier than if we ere to write canilla javascript.

### Next up

We will get hold of some piece of data from an external site through their API and we going to read their docs to see what are all the things we can do. We'll use their API as a menu of things that we can do to interact with their data. This is the theory of API, next lesson we'll do the practical work.
