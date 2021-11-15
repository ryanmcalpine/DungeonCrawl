const mysql = require('mysql');

const dbServer = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '#EDMrocks18',
    database: 'dungeoncrawl'
})

module.exports = dbServer