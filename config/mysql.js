'use strict';

let mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  database: 'test',
  user: 'root',
  password: '',
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

module.exports = connection;
