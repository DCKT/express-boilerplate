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

- [controllers](#controller)
- [models](#models)
- [views](#views)
- [routes](#routes)
- <a href="#routerjs">Router.js</a>

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

Actualy, I didn't implemented the Model pattern yet. I should coming soon with MySQL as DBMS.


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
