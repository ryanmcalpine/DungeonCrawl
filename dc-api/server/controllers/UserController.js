const express = require('express')
const db = require('../database/mySQLconnection')

const userDB = db

userDB.allUsers = () => {
    return new Promise ((resolve, reject) => {
        userDB.query(`SELECT * FROM USERS`, (err, result) => {
            if (err) {
                return reject(err)
            }
            return resolve(result)
        })
    })
}
userDB.highScores = () => {
    return new Promise ((resolve, reject) => {
        userDB.query(`select userName,highScore from users order by highScore desc`, (err, result) => {
            if (err) {
                return reject(err)
            }
            return resolve(result)
        })
    })
}

userDB.newUser = (username) => {
    return new Promise ((resolve, reject) => {
        userDB.query(`INSERT INTO USERS (\`userName\`) VALUES ('${username}')`, (err, result) => {
            if (err) {
                return reject(err)
            }
            return resolve(result)
        })
    })
}

userDB.userLogin = (username) => {
    return new Promise ((resolve, reject) => {
        userDB.query(`SELECT * FROM USERS WHERE \`userName\` = ?`, [username], (err, result) => {
            if (err) {
                return reject(err)
            }
            return resolve(result)
        })
    })
}
module.exports = userDB