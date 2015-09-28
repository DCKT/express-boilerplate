'use strict';
let db   = rootRequire('config/db');
let Book = db.define('book', {
  title: {
    type: db._Sequelize.STRING,
  },
});

module.exports = Book;
