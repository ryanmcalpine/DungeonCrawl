const express = require('express')
const db = require('../database/mySQLconnection')

const monsterDB = db

monsterDB.allMonsters = () => {
    return new Promise ((resolve, reject) => {
        monsterDB.query(`SELECT * FROM MONSTERS`, (err, result) => {
            if (err) {
                return reject(err)
            }
            return resolve(result)
        })
    })
}

monsterDB.monsterMoves = (moveName, damageType, damageValue, selfStatusEffects, targetStatusEffects) => {
    return new Promise ((resolve, reject) => {
        monsterDB.query(`SELECT * FROM MONSTERMOVES`, (err, result) => {
            if (err) {
                return reject(err)
            }
            return resolve(result)
        })
    })
}

module.exports = monsterDB