# Node.js Training - Weather Web Application

For my Node.js training I used three of the sections from [The Complete 2023 Web Development Bootcamp Udemy training course](https://www.udemy.com/course/the-complete-web-development-bootcamp/)

As part of my Node.js training I had developed a website application that allows a user to input a city name to return the weather condition for that location. This is a dynamic single page web application that uses Node.js with the framework Express.js.

## Sections and Lectures
As part of section 20 of this Udemy training course, I develop a Weather web app using a third party API from the [Open Weather Map website](https://openweathermap.org/api) which is the external server that responses to my server (app.js) via the API that I've written into the entery of my web application called app.js.

The lectures I used to develop this dynamic and interactive Node.js app are:

- 239. Why Do We Need APIs?
- 240. API Endpoints, Paths and Parameters.
- 241. API Authentication and Postman.
- 242. What is JSON?
- 243. Making GET Requests with the Node HTTPS.
- 244. How to Parse JSON.
- 245. Using Express to Render a Website with Live API Data.
- 246. Using Body Parser to Parse POST Request to the Server.

### Requirements
- [Node.js](https://nodejs.org/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Express](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [Body Parser](https://www.npmjs.com/package/body-parser)

### Getting Started

- `git clone` the repository
- Navigate to the directory
- Run `npm i` to install dependencies
- Run `nodemon app.js` to start the development server 

### Resources

- [Open Weather Map official website](https://openweathermap.org/api)
- I had registered for my own account on this website to generate my own API Key. Then I used this key in the app.js code file which is the Node Server.
- My code base has been pushed to my GitHub and the repository for that is: [Weather Web App](https://github.com/VanessaTsang888/the-complete-2023-web-development-bootcamp/tree/dev/S20-APIs/246-using-body-parser-to-parse-post)

All my code files for all the Node.js sections has been pushed to my [GitHub](https://github.com/VanessaTsang888/the-complete-2023-web-development-bootcamp/tree/dev)

## Quick Wins
These are improvements to the web app that I set to achieve after I have complete app by following the course instructor.
1. Code comments: write my own code comments to state the the logic for each block of code to demonstrate my understanding of server-side/backend development with Node.js and Express.js.
2. Code improvements: refactor my code to make my app more effient whilst still adhereing to the best practices.
3. Add more content to the app to state that I used a third party API and provide the resource to that.
4. Hosting: find an open source hosting platform and host this dynamic web app. Then provide the link to my team members and ask them for feedback.

### Code Comments
My code comments written is important it helps me understand the code I've written in terms of the various concepts for Node.js language and for me to use this as a resource within my future Node.js with Express projects. Also, my code comments helps my team members gage the level of my backend development using Node.js and Express.js. Therefore, taking the time to write sound code comments is a benefit to my career as a Javascript Developer rather than only focus on frontend development in the long run.

### Code Improvements
Making various types of code improvements by refactoring my code shows my ambition to keep up with the latest version of Javascript ES6 since Node.js is based on the Javascript language which I believe is best practice in software engineering today.
1. Refactor any ES5 code to use ES6 code including change the string concatination to use template literal which will also improve the performance of this web app.
2. Refactor the 'query' within the URL to something that makes more sense such as 'nameOfCity' since this will be easier for others to understand.

### Third Party API
To be transparant I need to make it clear that I had used an  API from someone eles server to get response/data to post into my server via the API I've written into my app.js file. I didn't develop the API myself as the objective of this project is to learn to use Node.js and Express.js for backend development. This is why I have developed new content to state state this and sent it to the browser.

### Hosting
To make it easier to my colleagues/ex-colleagues (whom are experienced developers) to test this web app and provide me with constructive feedback, I will look for an open source hosting platform and actually host this app.