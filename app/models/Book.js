'use strict';

let ORM   = require('./ORM');
let query = rootRequire('utils/query');

class Book extends ORM {

  constructor(opt) {
    super('books');
    this.book = {};

    return this;
  }

  new(values) {
    for (let value in values) {
      this.book[value] = values[value];
    }

    return this;
  }

  save() {
    return super.save(this.book);
  }
}

module.exports = new Book();
