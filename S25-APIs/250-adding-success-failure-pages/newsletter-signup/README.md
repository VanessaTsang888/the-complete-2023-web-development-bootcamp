# The Complete 2023 Web Development Bootcamp

[The Complete 2023 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/)

An online training course on Udemy.

This is focused on Section 20. APIs > developing a single page Newsletter Signup website application that is dynamic as it has a server-side backend using the Mailchimp API to get particular data from it as the response.

## About

Essentially for this Newsletter Signup website application, I used a third party API to develop my server which is called: app.js because my objective is to learn to use Node.js with the framework Express.js for backend development rather than learning to develop my own API. For the frontend development I've used a CSS framework **Bootstrap** to save time in using HTML and CSSS to developing the signup form since the purpose of this project is to learn how to develop a server using Node.js` and the Express.js framework.

**This is a single page web app developed using Node.js as the main programming language.**

By developing this newsletter signup website application I have completed the following lectures:

- API Endpoints, Paths and parameters.
- API Authentication and Postman.
- JSON formatted data.
- Make GET Requests with the Node HTTPS Module.
- How to parse JSON.
- Use Express to Render a Website with Live API Data.
- Use Body Parser to Parse POST Requests to the Server.
- The Mailchimp API.
- SeuUp the Signup Page.
- Post Data to Mailchimp's Servers via their API.
- Add Success and Failure Pages.
- Deploy Server with Heroku. # Couldn't complete this lecture as Heroku is not longer free to use to deploy this app.

**Mailchimp API Key**
Once user has entered their credentails and clicked the Sign Me Up button, they will be navigated to the **failure pag**e as my Mailchimp API key has been disabled hence the error code 404 I get in the Terminal (see my screen shot) and when I inspect the UI. They need me to provide them with ID which I'm not sure about as I'm very careful when it comes to cyber crime and data protection. However, my syntax with all code files is correct. Once I have the my API key enabled then the user will be able to reach the **scuccess page**.

### Deploy Server with Heroku:
I couldn't completed this lecture as I Heroku is no long free or open source. Someone in near future I am looking to use Glitch to host this Node.js web app as Glitch is currently free.

## The Tech Stack:
1. Node.js: a language for server-side backend development making my web app dynamic rather than static.
2. Express.js: a framework that provides broad features for building web apps using Node.js.
3. Nodemon: a library to my get changes updated in the background.
4. Boostrap: a CSS framework to save on some development time in writing HTML/CSS allowing me to focus on backend development using Node.js and Express.js.
5. Mailchimp developer API: unfortunately, my Mailchip API Key has been disabled and I am getting this fixed byi submitting my ID as they need this to confirm my location. There are certain nations they are not allowed to serve due to sanctions. This is why currently you will only reach the Failed web page and not the Successful web page, hence why you will see the error code of 401 - unauthorised in the terminal or when you inspect the UI. However, the syntax is correct.
6. Heroku: a server to deploy our web app and make available to everyone on the World Wide Web. This is GoLive part of this project.

## How To Run This Web App:
To run this web app locally follow the below instructions;

1. Clone the repo down from GitHub.
2. Open the project in Code IDE.
3. Install node modules: `npm i`
4. Navigate to the directory called: newsletter-signup as this is where the node modules directory is located.
5. Use this command to launch the server using nodemon: `nodemon app.js`

### Testing:
**_Manual Testing_**
You may wish to use Chrome Dev Tools to test this web app in the UI. From doing this you can see the error code of 401 which in the near future should be 200 as I'm currently getting my Mailchimp account unfrozen. Therefore, the error code will change from 401 to 200.

### Screen shots
As you can see I have taken some screen shots of this web app and show what the app looks like in UI and how it works. The Signup form page is the app.js file which is the server and the app entry point.

## Next Up:
**Quick Wins**
When I get time I hope to do a couple of Quick Wins of this Node.js project such as:
1. Cyber Security: Apply validate on the form to restrict certain characters being submitted by users.
2. TypeScript: The dev's have the ability and choice to declare their functions, data types, and variables in Typescript to execute their programs. So, this leads to the generation of very less amount of bugs and errors in the code which get resolved very easily. Therefore, I will refactor the code base to use TypeScript on top of Node.js to help prevent bugs when I come to develop this app further in the future.
3. Logo: at the moment the logo is not the finial vector art that I like to use but just a placeholder. I did this so could focus learning Node.js for BE Server-side development. In the futre i will create a new log called: "Mentor FE Dev" and use this instead.
4. Hosting: I will use an open source hosting platform to host this web app and ask my developer colleagues to provide me with their feedback via my GitHub. This will help me grow as an ambitious Javascript developer transitioning from a frontend developer.

I am treating this web app as my ongoing Node.js training projcet to get plenty of backend server-side developemt practice as I am a enthusiatstic and self-motivated frontend developer and hopeing to become a Javascript developer in the near future.
