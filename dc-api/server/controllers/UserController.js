const express = require('express')
const SSHConnection = require('../database/mySQLconnection')

let userDB = SSHConnection

userDB.all = () => {
    return new Promise((resolve, reject) => {
        userDB.query(`SELECT * FROM USERS`, (err, result) => {
            if (err) {
                return reject(err)
            }
            else {
                return result
            }
        })
    })
}

userDB.newUser = (username, email, password) => {
    return new Promise((resolve, reject) => {
        userDB.query(`INSERT INTO users VALUES ('${username}', '${email}', '${password}')`, (err, result) => {
            if (err) {
                return reject(err)
            }
            else {
                return result
            }
        })
    })
}

module.exports = userDB