var express    = require('express'),
http           = require('http'),
app            = express(),
server         = http.createServer(app),
Router         = require('./app/Router');


/**
* MIDDLEWARE
********************* */
require('./config/middleware')(app, express);

/**
* ROUTES
********************* */
app.use('/', Router.index);
app.use(function(req, res, next){
  res.render('404', {
    title: 'Page introuvable !'
  });
});

server.listen(8080);
console.log("\033[33mServer started on localhost:8080\033[39m\n");