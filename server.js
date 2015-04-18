import express from 'express';
import http from 'http';
import { Index } from './app/Router';

var app = express(),
server  = http.createServer(app);



/**
* MIDDLEWARE
********************* */
require('./config/middleware')(app, express);

/**
* ROUTES
********************* */
app.use('/', Index);

app.use(function(req, res, next){
  res.render('global/404', {
    title: 'Page introuvable !'
  });
});

server.listen(8080);
console.log("Server started on localhost:8080\n");