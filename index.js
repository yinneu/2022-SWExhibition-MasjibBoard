const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '3.36.229.145',
  user     : 'root',
  password : 'rkskek204',
  database : 'Random_mj'
});

connection.connect();

connection.query('SELECT * from Random_mj.MJList', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();