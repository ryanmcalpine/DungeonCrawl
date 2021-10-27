var mysql      = require('mysql');

/*
var connection = mysql.createConnection({
//    debug: true,

    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
});
*/

var connection = mysql.createConnection({
//    debug: true,

    host: '',
    port: '',
    user: 'rmcalpine_cs470_fall21',
    password: 'mc45233',
    database: 'rmcalpine_cs470_fall21'
});

module.exports = connection;