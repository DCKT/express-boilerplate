'use strict';

let query = require('../../utils/query');

class ORM {
  static use(table) {
    this.table = table;
  }

  static findAll() {
    return query(`SELECT * FROM ${this.table}`);
  }

  static findById(id) {
    return query(`SELECT * FROM ${this.table} WHERE id = ?`, [id]);
  }

  save(obj) {
    return query(`INSERT INTO ${this.table} SET ?`, [obj]);
  }
};

module.exports = ORM;
