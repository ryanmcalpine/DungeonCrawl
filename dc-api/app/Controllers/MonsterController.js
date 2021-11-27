const dbConnection = require('../../database/mySQLconnect');
const dateFormat = require('dateformat');

function now() {
    return dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
}

class MonsterController {
    constructor() {
        console.log('Constructor of MonsterController is called.');
    }

    async allMonsters(ctx)
    {
        console.log('all Monsters');
        return new Promise((resolve, reject) => {
            const query = `select * from monsters order by monsterID`;
            dbConnection.query({
                sql: query,
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in MonsterController::allMonsters", error);
                    ctx.body = [];
                    ctx.status = 200;
                    return reject(error);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => console.log("Database connection error.", err));
    }
    async getMonster(ctx)
    {
        console.log('getMonster');
        return new Promise((resolve, reject) => {
            const query = `select * from monsters where monsterID = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.monsterID]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in MonsterController::getMonster", error);
                    ctx.body = [];
                    ctx.status = 200;
                    return reject(error);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => console.log("Database connection error.", err));
    }
    async getMaxHP(ctx)
    {
        console.log('getPhysicalATK');
        return new Promise((resolve, reject) => {
            const query = `select maxHP from monsters where monsterID = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.monsterID]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in MonsterController::getMaxHP", error);
                    ctx.body = [];
                    ctx.status = 200;
                    return reject(error);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => console.log("Database connection error.", err));
    }
    async getPhysicalATK(ctx)
    {
        console.log('getPhysicalATK');
        return new Promise((resolve, reject) => {
            const query = `select physicalATK from monsters where monsterID = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.monsterID]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in MonsterController::getPhysicalATK", error);
                    ctx.body = [];
                    ctx.status = 200;
                    return reject(error);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => console.log("Database connection error.", err));
    }
    async getMagicATK(ctx)
    {
        console.log('getMagicATK');
        return new Promise((resolve, reject) => {
            const query = `select magicATK from monsters where monsterID = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.monsterID]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in MonsterController::getMagicATK", error);
                    ctx.body = [];
                    ctx.status = 200;
                    return reject(error);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => console.log("Database connection error.", err));
    }

    async getPhysicalDEF(ctx)
    {
        console.log('getPhysicalDEF');
        return new Promise((resolve, reject) => {
            const query = `select physicalDEF from monsters where monsterID = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.monsterID]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in MonsterController::getPhysicalDEF", error);
                    ctx.body = [];
                    ctx.status = 200;
                    return reject(error);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => console.log("Database connection error.", err));
    }
    async getMagicDEF(ctx)
    {
        console.log('getMagicDEF');
        return new Promise((resolve, reject) => {
            const query = `select magicDEF from monsters where monsterID = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.monsterID]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in MonsterController::getMagicDEF", error);
                    ctx.body = [];
                    ctx.status = 200;
                    return reject(error);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => console.log("Database connection error.", err));
    }
    async getSpeed(ctx)
    {
        console.log('getSpeed');
        return new Promise((resolve, reject) => {
            const query = `select speed from monsters where monsterID = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.monsterID]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in MonsterController::getSpeed", error);
                    ctx.body = [];
                    ctx.status = 200;
                    return reject(error);
                }
                ctx.body = tuples;
                ctx.status = 200;
                return resolve();
            });
        }).catch(err => console.log("Database connection error.", err));
    }

}

module.exports = MonsterController;
