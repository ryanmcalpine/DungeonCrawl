const dbConnection = require('../../database/mySQLconnect');
const dateFormat = require('dateformat');
//const buildStudentViewFromCourses = require('../Schema/buildStudentViewFromCourses');

function now() {
    return dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
}

class UsersController {
    constructor() {
        console.log('Constructor of Ro0utesController is called.');
    }

    async allUsers(ctx) {
        console.log('employees all employees called.');
        return new Promise((resolve, reject) => {
            const query = `select * from users order by userName`;
            dbConnection.query({
                sql: query,
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::allEmployees", error);
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

    async getUser(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::employeeWithEmployeeID", error);
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

    async getGold(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT gold FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::employeeWithEmployeeID", error);
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
//TODO Make a write account function


module.exports = UsersController;
