// Load module
var mysql;
mysql = require('mysql');
//Initialize pool
var pool  =  mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    port: '3306',
    user     : 'root',
    password : '',
    database : 'qldanhsach',
});
module.exports = pool;
