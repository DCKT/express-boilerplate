import mysql from 'mysql';

var connection = mysql.createConnection({
  host: 'localhost',
  database: 'test',
  user: 'root',
  password: ''
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

export default connection;