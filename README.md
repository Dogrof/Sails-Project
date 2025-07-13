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

## Detailed steps
1. First of all I've noted that Controller in TT using Sails.js methods, so it was obvious what should I use as an Back-End part, so I've started to read documentation and found, that Sails based on Express.js(Node), and also using EJS as template manager, so clean version was installed immediately and I spent some time checking how Sails managing routes, controllers and actions.
2. Next step - is adding mockdata that will be rendered by the EJS, and to avoid additional files with tons of code - I've installed MongoDb and inserted some entries into database, but after db connection to the Sails - there was an issue with OP methods used by Sails, so after some time searching the answer I've found, that OP methods were removed in V6 of Mongo, so I needed to downgrade Mongo to 4.4 version.
3. After fixing DB it was time for creating controller to handle DB entries, and I've decided to do one controller for rendering items when users comes to homepage, and the other one to handle Axios requests.
4. Now it's time to create some template using EJS data, so I've managed how to send needed data by Sails routes and decided to stylize components via Tailwind, just to avoid common scss.
5. Well, the most interesting part is passing data from EJS to the Vue, so first idea was about the localStorage, but there is a problem saving data from JSON, so I moved to the window storage.
6. And by the end of it all I've added Vue data and methods to handle new stories, that's it )
