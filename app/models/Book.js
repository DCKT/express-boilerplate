import mysql from '../../config/mysql';

export default {
  findAll(cb) {
    mysql.query('SELECT * FROM books', function (err, result) {

      if (err) {
        console.error(err);
      }
      
      cb(result);
    })
  }
}