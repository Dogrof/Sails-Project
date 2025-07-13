# Stories Page

a [Sails](http://sailsjs.org) CRUD application to manage articles

Test task to implement Vue in EJS + Sails environment.

### Version
1.0.0

## Usage
By entering the page you will get 10 stories from database, rendered by EJS. After clicking Load More button, you will get additional
10 stories, that will be added by Vue. In case if there are no additional stories - button will disappear.

### Installation

First of all you should install the dependencies.

```sh
$ npm install sails -g
```

```sh
$ npm i
```
After that Create database named storyDB with stories collection, and import json file named storyDB.stories.
Please note, that after V6 Mongo removed OP methods, so you can achieve problems with connection to Sails js

### Serve
To start application:

```sh
$ npm start
```
Feel free to visit http://localhost:1337 ^_^

## Steps to reproduce
By the Technical task I was needed to:
1. Implement Controller that gives you stories and also can handle their limit and offset
2. Render 10 items when user comes to homepage. 
3. Add Load More button, that will give additional 10 items using Vue js.

First of all I've noted that Controller in TT using Sails.js methods, so it was obvious what should I use as an Back-End part. First of all I've started to read documentation and found, that Sails based on Express.js(Node), and also using EJS as template manager, so I've
installed clean version and started to check how Sails managing routes, controllers and actions. Next step - is adding mockdata that will
be rendered by the EJS, and to avoid additional files with tons of code - I've installed MongoDb and inserted some entries into
database and connected it to Sails, but there was an issue OP methods used by Sails, so after some time I've needed to downgrade Mongo to 4.4 version.
Next step is creating controller to handle DB entries, and I've decided to done one controller for rendering items when users comes to
homepage, and the other one to handle Axios requests.
After that I've created EJS template to show first 10 stories and started to search how should I implement Vue 2 and work with it, cause
simply adding it to the node modules will not work, so I've added it via cdn. So now is the Css time, but just using the css is boring,
so I've used Tailwind css to stylize elements.
Next interesting issue - is passing data from EJS to Vue, cause you're unable to do that after EJS render, so first of all I've tried to
use localStorage, but faced problems about storing there object, so decided to use window storage.
And by the end of it all I've added vue data and methods to handle new stories, that's it )
