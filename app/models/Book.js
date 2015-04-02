import mysql from '../../config/mysql';

export default {
  findAll(cb) {
    return new Promise(function (resolve, reject) {
      mysql.query('SELECT * FROM books', function (err, result) {

        if (err) {
          reject(err);
        }
        
        resolve(result);
      });
    });
  }
}