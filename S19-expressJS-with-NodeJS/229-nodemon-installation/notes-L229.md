# 229. Nodemon Installation

Nodemon Installation
TL;DR If you have issues with nodemon in the next lesson, come back here and try these solutions.

Hey guys,

In the next lesson, I'll be walking you through how to install nodemon, a npm package that will make it way easier for us to auto start our servers.

## Problems with Installing nodemon

In the next lesson, I'll be showing you the official installation page from nodemon, but you will need to give admin permissions to install it on your system.

So when this command doesn't work:

`npm install -g nodemon`
I recommend to use this one instead:

`sudo npm install -g nodemon`
It will then ask you to enter the password you use to log on to your computer.

So, if you have any problems with this step.

1. Make sure you are logged in to your computer on an account with admin privileges.

2. Use sudo in front of the installation command.

3. Type your password when prompted. Note your password typing will not show. Just hit enter once you've typed it all.

### Problems with Running nodemon

If after installing, when you try to use nodemon, you get errors like the ones below:

/home/user/projects/mongodb-todo/node_modules/nodemon/lib/monitor/run.js:336
spawn('kill', ['-s', sig, child.pid].concat(kids.map(p => p.PID)))
^
TypeError: Cannot read property 'map' of undefined
at /home/user/projects/mongodb-todo/node_modules/nodemon/lib/monitor/run.js:336:58
at /home/user/projects/mongodb-todo/node_modules/pstree.remy/lib/tree.js:53:11
at ChildProcess.onClose (/home/user/projects/mongodb-todo/node_modules/pstree.remy/lib/tree.js:80:9)
at ChildProcess.emit (events.js:182:13)
at maybeClose (internal/child_process.js:962:16)
at Process.ChildProcess.\_handle.onexit (internal/child_process.js:251:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! mongodb-todo@1.0.0 start: nodemon
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the mongodb-todo@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm ERR! A complete log of this run can be found in:
npm ERR! /home/user/.npm/\_logs/2018-11-22T12_10_04_952Z-debug.log
You can get rid of these by entering the command:

`npm i pstree.remy@1.1.0 -D`

This issue is documented here:

https://github.com/remy/nodemon/issues/1459

All the best,
Your instructor, Angela
