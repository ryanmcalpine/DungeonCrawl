const dbConnection = require('../../database/mySQLconnect');
const dateFormat = require('dateformat');

function now() {
    return dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
}

class ItemsController {
    constructor() {
        console.log('Constructor of Items is called.');
    }
    async getArmor(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM armor WHERE itemID = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.itemID]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getArmor", error);
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
    async getConsumable(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM consumables WHERE itemID = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.itemID]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getConsumable", error);
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

module.exports = ItemsController;
