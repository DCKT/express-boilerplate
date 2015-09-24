'use strict';

let ORM = require('./ORM');
let query = require('../../utils/query');

ORM.use("books");

class Book extends ORM {

  constructor(opt) {
    this.title = opt.title;

    return this;
  }

  get book() {
    return {
      title: this.title
    }
  }

  save() {
    return super.save(this.book);
  }
}

module.exports = Book;
