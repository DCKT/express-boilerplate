'use strict';

let express   = require('express');
let http      = require('http');
let { Index } = require ('./app/Router');
let app       = express();
let server    = http.createServer(app);



/**
* MIDDLEWARE
********************* */
require('./config/middleware')(app, express);

/**
* ROUTES
********************* */
app.use('/', Index);

app.use((req, res, next) => {
  res.render('global/404', {
    title: 'Page introuvable !',
  });
});

server.listen(8080);
console.log('Server started on localhost:8080\n');
