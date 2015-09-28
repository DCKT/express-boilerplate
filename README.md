Express boilerplate
================

I like Ruby On Rails and his structure so I decided to follow their MVC conventions with the node module expressjs. I'm also inspired
with the Ember.js framework that I like too.


## Install

All the code is written with ES2015 syntax, you need the Node v4 version.


- Clone the repo
- `npm i`
- `npm start` -> Will start a nodemon instance for your server

## ES2015

This boilerplate use ES2015 syntax with Node.js 4.0, you can check out the [feature available here](https://nodejs.org/en/docs/es6/)

## rootRequire

**rootRequire** is a global function designed to avoid some excessive path in your application and avoid NODE_PATH configuration (specialy for Windows users).
Instead of calling require, just call rootRequire and the path of your module. **Remember**, the path always start from the top of your application :

```js
let Book = rootRequire('app/models/Book');
```

## Structure

MVC pattern is cool and simple to understand, so it's based on him.
First, you have an **app** folder who will contain all code of your application :

**app/**
- [controllers](#controller)
- [models](#models)
- [views](#views)
- [routes](#routes)
- <a href="#routerjs">Router.js</a>

**assets/**

**config/**
### Controller

A controller is design to handle the logic of your application, so he will handle the request and send the response. You should create **one controller per route**, so if you create a **/users** route the controller should be named **UsersController**. This pattern allow you to quickly find the file you want in your text editor.

The structure of a controller is simple, export an object of methods. Here is an example :
```js
// IndexController.js

module.exports = {
  index: {
    get(req, res) {
      res.locals.title = "Home";
      res.render('index');
    }
  }
};
```

### Models

I chose [Sequelize](http://docs.sequelizejs.com/en/latest/) for the ORM because it has a great syntax based on Promise and has a great documentation.
Moreover, you can choose the database type of you want (MySQL, Postgre, Cassandra, etc...).
With this way, you can create and share your models very easly.

Each model must have a **sync** in the *createTables* task wich can be run with the npm command : `npm run db:tables:create`.

Example :
```js
'use strict';
// app/models/Book.js

let db   = rootRequire('config/db');
let Book = db.define('book', {
  title: {
    type: db._Sequelize.STRING,
  },
});

module.exports = Book;
```

```js
'use strict';
require('../utils/rootRequire')();
let Book = rootRequire('app/models/Book');

Book.sync().then(() => {
  console.log('Creating table Book');
  // Todo : Kill the script
});

```

### Views

This boilerplate use **Jade** for templating, if you prefer ejs, you just need to edit the `middleware.js` file in the config folder.

As I said for controller and routes, it's almost the same for the views. You should create a folder based on your routes (ex: users), create a
**users** folder who will contain all the view concerned by the user.

### Routes

The routes files are used for making the relation between your controller and the URLs. Here is an example :
```js
'use strict';
// IndexRoute.js

/**
* Home Route
* path: /
******************** */

let express    = require('express');
let Controller = rootRequire('app/controllers/IndexController');
let router     = express.Router();


router.get('/', Controller.index.get);

module.exports = router;
```

As you can see, I put a function according the HTTP verb like here **index.get** for the GET on `/`.

### Router.js

The **Router.js** may intrigue you, it serves to handle all of your routes. Here is an example :
```js
// Router.js

module.exports = [
  {
    path: '/',
    handler: rootRequire('app/routes/IndexRoute'),
  },
  {
    path: '/books',
    handler: rootRequire('app/routes/BooksRoute'),
  },
];

```

## Assets

This boilerplate set the **assets** folder for all of your static files. Some folders are already available :

- stylesheets
- javascripts
- images
- fonts

In your views, the links will look like this : `/stylesheets/style.css` or `/images/logo.png`.

## Config

The folder **config** is design to keep all config files like middleware, mysql config, etc..
The idea of this folder is to separate the logic of the configuration. With MySQL as example, you just have to create the connection and export the object for making queries.

## Testing

This boilerplate use [Mocha](https://mochajs.org) and [superagent](https://github.com/visionmedia/superagent) for testing

## Production

I recommand you to use [PM2](https://github.com/Unitech/pm2) as process manager who is really simple to handle.
Don't forget to set your **NODE_ENV** to **production** !

```
set NODE_ENV=production
```

When the NODE_ENV is set to *production*, the [compression module](https://github.com/expressjs/compression) will be called.
Feel free to use the global **PROD_ENV** variable to use differents configurations for your application.
