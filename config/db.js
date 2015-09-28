'use strict';

let Sequelize = require('sequelize');
let db = new Sequelize('test', 'root', '', {
  dialect: 'mysql',
});

db._Sequelize = Sequelize;

module.exports = db;
