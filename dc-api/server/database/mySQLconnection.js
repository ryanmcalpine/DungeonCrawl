const mysql = require('mysql');

const dbServer = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'fr33d0m',
    database: 'dungeon_crawler'
})

module.exports = dbServer