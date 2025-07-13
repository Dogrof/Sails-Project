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
