Express boilerplate
================


## Install

All the code is written with ES6 syntax, so you have to install [Babel](https://babeljs.io/docs/using-babel/) and use the `babel-node` command.


- Clone the repo 
- `npm i`
- `npm start`

## Structure

MVC pattern is cool and simple to undertand, so it's based on him.
First, you have an **app** folder who will contain all code of your application :

- controllers
- models
- views
- routes
- Router.js

#### Controller

A controller is design to handle the logic of your application, so he will handle the request and deserve the response. You should create **one controller per route**, so if you create a **/users** route the controller should be named **UsersController**. This pattern allow you to quickly find the file you want in your text editor. 

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

#### Router.js
The **Router.js** may intriguate you, it serves to handle all of your routes. Here is an example :
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
