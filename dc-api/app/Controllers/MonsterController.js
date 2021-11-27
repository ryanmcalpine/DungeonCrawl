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
            const query = `select COUNT(cycleID) as numTrans from transactions where cycleID = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.cycleID]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in MonsterController::allEmployees", error);
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
