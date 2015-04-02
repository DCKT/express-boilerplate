import mysql from '../config/mysql';

export default function (query, params, resolve, reject) {
  mysql.query(query, params, function (err, result) {

    if (err) {
      reject(err);
    }

    resolve(result);
  });
}