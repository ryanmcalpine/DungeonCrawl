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
                    console.log("Connection error in UsersController::allUsers", error);
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
                    console.log("Connection error in UsersController::getUser", error);
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
                    console.log("Connection error in UsersController::getGold", error);
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
    async getHighScore(ctx) {
        return new Promise((resolve, reject) => {
            const query = `select userName,highScore from users order by highScore desc`;
            dbConnection.query({
                sql: query,
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getHighScore", error);
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
    async getFighterMaxHP(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT fighterMaxHP FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getFighterMaxHP", error);
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
    async getfighterPhysicalAttack(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT fighterPhysicalAttack FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::fighterPhysicalAttack", error);
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
    async getfighterMagicalAttack(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT fighterMagicalAttack FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::fighterPhysicalAttack", error);
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
    async getfighterPhysicalDefense(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT fighterPhysicalDefense FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::fighterPhysicalDefense", error);
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
    async getfighterMagicDefense(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT fighterMagicDefense FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::fighterMagicDefense", error);
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
    async getmageMaxHP(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT mageMaxHP FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::mageMaxHP", error);
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
    async getmagePhysicalAttack(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT magePhysicalAttack FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::magePhysicalAttack", error);
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
    async getmageMagicalAttack(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT mageMagicalAttack FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::mageMagicalAttack", error);
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
    async getmagePhysicalDefense(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT magePhysicalDefense FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::magePhysicalDefense", error);
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
    async getmageMagicDefense(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT mageMagicDefense FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::mageMagicDefense", error);
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
    async getrogueMaxHP(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT rogueMaxHP FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::rogueMaxHP", error);
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
    async getroguePhysicalAttack(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT roguePhysicalAttack FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::roguePhysicalAttack", error);
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
    async getrogueMagicalAttack(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT rogueMagicalAttack FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::rogueMagicalAttack", error);
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
    async getroguePhysicalDefense(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT roguePhysicalDefense FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::roguePhysicalDefense", error);
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
    async getrogueMagicDefense(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT rogueMagicDefense FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::rogueMagicDefense", error);
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
