import mysql from '../config/mysql';

export default function (query, values) {
  return new Promise(function (resolve, reject) {
    mysql.query(query, values, function (err, result) {
      if (err) {
        reject(err);
      }

      resolve(result);
    });
  })
}