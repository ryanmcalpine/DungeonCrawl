var mysql = require('mysql');

// Leaving this commented in case we are able to use later:
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


// API SETUP:
// The last 3 lines are for local files, in this case Ryan's.
// Modify these to represent your local database!
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'sm00thies!',
    database: 'dungeon_crawl'
});

module.exports = connection;
