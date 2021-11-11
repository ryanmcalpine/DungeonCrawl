const mysql = require('mysql2');
const { Client } = require('ssh2');
const ssh = new Client();

const dbServer = {
    // In here is where we need to put Ryan's DB info
    host: 'localhost',
    port: 3306,
    user: 'rmcalpin_cs470_fall21',
    password: 'mc45233',
    database: 'rmcalpin_cs470_fall21'
}
const tunnelConfig = {
    // This should be your blue login information
    host: 'blue.cs.sonoma.edu',
    port: 22,
    username: 'jjuarez',
    password: '007492648'
}
const forwardConfig = {
    // This just takes where we're starting from and connecting TO
    // That's why it's called forwarding
    srcHost: '127.0.0.1',
    srcPort: 3306,
    dstHost: dbServer.host,
    dstPort: dbServer.port
}
const SSHConnection = new Promise((resolve, reject) => {
    ssh.on('ready', () => {
        ssh.forwardOut(
        forwardConfig.srcHost,
        forwardConfig.srcPort,
        forwardConfig.dstHost,
        forwardConfig.dstPort,
        (err, stream) => {
            if (err) reject(err);
            // Create a new DB server object
            const updatedDbServer = {
                 ...dbServer,
                 stream
            }
            // Connect to MySQL
            const connection =  mysql.createConnection(updatedDbServer);
            // Check for successful connection
            // Resolve or Reject the promise accordingly
            connection.connect((err) => {
                if (err) {
                    console.log('ERROR on MySQL Connection')
                    reject(err)
                }
                else {
                    console.log('Connection to MySQL SUCCESSFUL')
                    resolve(connection)
                }
            })
        })
    }).connect(tunnelConfig)
})

module.exports = SSHConnection;