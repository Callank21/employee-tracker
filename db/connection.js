const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '9^G-s?t72jxg=tZ3',
    database: 'employees'
});

module.exports = db;