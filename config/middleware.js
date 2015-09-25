'use strict';

let bodyParser     = require('body-parser');
let methodOverride = require('method-override');
let path           = require('path');
let session        = require('express-session');

module.exports = function(app, express) {
  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  app.use(methodOverride());

  app.use(session({
    secret: 'sUperS3cr3t',
    saveUninitialized: true,
    resave: true,
  }));

  app.set('views', path.join(__dirname, '../app/views'));
  app.set('view engine', 'jade');
  app.use(express.static(path.join(__dirname, '../assets')));
};
