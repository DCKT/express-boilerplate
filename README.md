Express boilerplate
================


## Install

All the code is written with ES6 syntax, so you have to install [Babel](https://babeljs.io/docs/using-babel/) and use the `babel-node` command.


- Clone the repo 
- `npm i`
- `npm start`

## Structure

MVC pattern is cool and simple to undertand, so it's based on him.
First, you have an **app** folder who will container all of your application :

- controllers
- models
- views
- routes
- Router.js

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
