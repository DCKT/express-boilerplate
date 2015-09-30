'use strict';

let Sequelize = require('sequelize');
let db = new Sequelize('test', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
  port: '3306'
});

db._Sequelize = Sequelize;

module.exports = db;
