'use strict';

let query = require('../../utils/query');

class ORM {
  constructor(table) {
    this.table = table;
  }

  findAll() {
    return query(`SELECT * FROM ${this.table}`);
  }

  findById(id) {
    return query(`SELECT * FROM ${this.table} WHERE id = ?`, [id]);
  }

  save(obj) {
    return query(`INSERT INTO ${this.table} SET ?`, [obj]);
  }
};

module.exports = ORM;
