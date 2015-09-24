'use strict';

let mysql = require('../config/mysql');

module.exports = function(query, values) {

  return new Promise((resolve, reject) => {
    mysql.query(query, values, (err, result) => {
      if (err) {
        reject(err);
      }

      resolve(result);
    });
  });
};
