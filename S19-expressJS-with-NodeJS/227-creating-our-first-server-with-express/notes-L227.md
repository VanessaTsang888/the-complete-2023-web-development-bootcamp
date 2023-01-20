# 227. Creating Our First Server with Express

Use Node.js and express to develop a server locally.

**_Task 01:_**

- Create new dir and call it: `mkdir my-express-server`.
- Navigate into the new dir: `$ cd`
- Inside, create a new file called: server.js: `$ touch server.js` # this don't work in Windows
- Inialise npm with server.js as start point: `npm init`

## Now set up NPM. The package name is my-express-server.

package name: (my-express-server)
version: (1.0.0)
description: My first express server
entry point: (server.js)
test command:
git repository:
keywords:
author: Vanessa Tsang
license: (ISC)
About to write to C:\software-development\dev-training\the-complete-2023-web-development-bootcamp\S19-expressJS-with-NodeJS\227-creating-our-first-server-with-express\my-express-server\package.json:

```js
{
  "name": "my-express-server",
  "version": "1.0.0",
  "description": "My first express server",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "Vanessa Tsang",
  "license": "ISC"
}
```

Press enter key to compile our package.json > setup completed.

Open the project in Code IDE: `code .` > the instructor is using Atom but I'm using Code or VSCode.

## Install Express:

The node modules.
Check the offical docs: https://expressjs.com > Getting started > Installing:

Add express to our package.json
`$ npm install express --no-save` # don't need the flag now as its done by default.
Has installed as I can see it in the package.json > Ln 13 > `"express": "^4.18.2"`

### Require Express

https://expressjs.com > Getting started > Hello world example >

server.js
Write some code. Then run server: `node server.js`
Now will receive the msg we wrote in the callback func.

### localhost:3000

When we navigate to this port we receive: Cannot GET /
as we now need to write some code so that our server responds when a browser is making a request to our server. We have to send browser some info to display on the screen.

Next we learn about the request and resonse that we can provide when a browser makes a GET request.
