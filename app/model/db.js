'user strict';

var mysql = require('mysql');

// mysql db connection configurations
var connection = mysql.createConnection({
    host: process.env.MYSQL_DB_HOST,
    port: process.env.MYSQL_DB_PORT,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASS,
    database: process.env.MYSQL_DB_SCHEMA
});

// connect to database

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;