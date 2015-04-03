Express boilerplate
================

I like Ruby On Rails and his structure so I decided to follow their MVC conventions with the node module expressjs. I'm also inspired
with the Ember.js framework that I like too.


## Install

All the code is written with ES6 syntax, so you have to install [Babel](https://babeljs.io/docs/using-babel/) and use the `babel-node` command.


- Clone the repo 
- `npm i`
- `npm start`

## Structure

MVC pattern is cool and simple to undertand, so it's based on him.
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

export default {
  index: {
    get(req, res) {
      res.locals.title = "Home";
      res.render('index');
    }
  }
};
```

### Models

This boilerplate use MySQL as default. The configuration file is called **mysql.js** and is located in the **config** folder. Here is the basic setup :
```js
import mysql from 'mysql';

var connection = mysql.createConnection({
  host: 'localhost',
  database: 'test',
  user: 'root',
  password: ''
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

export default connection;
```

Don't forget to use the correct database and login/password ! You can now create a model based on the route or something you want like **Book.js**. This file will use a function utility called **query**. Here is an example :

```js
// Book.js
import query from '../../utils/query';

export default {
  findAll(cb) {
    return query('SELECT * FROM books');
  },
  findById(id) {
    return query('SELECT * FROM books WHERE id = ?', [id]);
  }
}
```

query is designed for simplifying the model and **use Promise** ! So when you call the method in your controller, you have to use the **then** and **catch** functions :
```js
// BooksController.js
import Book from '../models/Book';

export default {
  index: {
    get(req, res) {
    
      Book.findAll()
        .then(books => {
          res.locals.title = "Home";
          res.locals.books = books;
          res.render('index');
        })
        .catch(err => {
          console.error(err);
        });

    }
  }
}
```

Easy to read and understand isn't it ?

### Views

This boilerplate use **Jade** for templating, if you prefer ejs, you just need to edit the `middleware.js` file in the config folder.

As I said for controller and routes, it's almost the same for the views. You should create a folder based on your routes (ex: users), create a
**users** folder who will contain all the view concerned by the user.

### Routes

The routes files are used for making the relation between your controller and the URLs. Here is an example :
```js
// IndexRoute.js

/**
* Home Route
* path: /
******************** */

import express from "express";
import Controller from "../controllers/IndexController";

var router = express.Router();


router.get('/', Controller.index.get);

export default router;
```

As you can see, I put a function according the HTTP verb like here **index.get** for the GET on `/`.

### Router.js

The **Router.js** may intrigue you, it serves to handle all of your routes. Here is an example :
```js
// Router.js

export default {
  Index: require('./routes/IndexRoute')
}
```
Now you have to import just one file in your **server.js** :
```js
// server.js

import { Index } from './app/Router';
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
