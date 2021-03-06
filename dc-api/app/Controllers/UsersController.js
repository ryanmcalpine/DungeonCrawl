const dbConnection = require('../../database/mySQLconnect');
const dateFormat = require('dateformat');
//const buildStudentViewFromCourses = require('../Schema/buildStudentViewFromCourses');

function now() {
    return dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
}

class UsersController {
    constructor() {
        console.log('Constructor of UserController is called.');
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
    async getFighterSpeed(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT fighterSpeed FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getFighterSpeed", error);
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
    async getMageSpeed(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT mageSpeed FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getMageSpeed", error);
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
    async getRogueSpeed(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT rogueSpeed FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getRogueSpeed", error);
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
    async getfighterEquipped(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT fighterEquipped FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getfighterEquipped", error);
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
    async getmageEquipped(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT mageEquipped FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getmageEquipped", error);
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
    async getrogueEquipped(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT rogueEquipped FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getrogueEquipped", error);
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
    async getfighter0Unlocked(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT fighter0Unlocked FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getfighter0Unlocked", error);
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
    async getfighter1Unlocked(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT fighter1Unlocked FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getfighter1Unlocked", error);
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
    async getfighter2Unlocked(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT fighter2Unlocked FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getfighter2Unlocked", error);
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
    async getfighter3Unlocked(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT fighter3Unlocked FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getfighter3Unlocked", error);
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
    async getfighter4Unlocked(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT fighter4Unlocked FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getfighter4 Unlocked", error);
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
    async getmage0Unlocked(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT mage0Unlocked FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getmage0Unlocked", error);
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
    async getmage1Unlocked(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT mage1Unlocked FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getmage1Unlocked", error);
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
    async getmage2Unlocked(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT mage2Unlocked FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getmage2Unlocked", error);
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
    async getmage3Unlocked(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT mage3Unlocked FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getmage3Unlocked", error);
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
    async getmage4Unlocked(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT mage4Unlocked FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getmage4 Unlocked", error);
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
    async getrogue0Unlocked(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT rogue0Unlocked FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getrogue0Unlocked", error);
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
    async getrogue1Unlocked(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT rogue1Unlocked FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getrogue1Unlocked", error);
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
    async getrogue2Unlocked(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT rogue2Unlocked FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getrogue2Unlocked", error);
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
    async getrogue3Unlocked(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT rogue3Unlocked FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getrogue3Unlocked", error);
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
    async getrogue4Unlocked(ctx) {
        return new Promise((resolve, reject) => {
            const query = `SELECT rogue4Unlocked FROM users WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::getrogue4 Unlocked", error);
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
    async updateGold(ctx) {
        console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET gold = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.gold, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setUserGoldAmount", error);
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
    async setFighterEquipped(ctx) {
        console.log(`update fighter equipped called with: ${ctx.params.fighterEquipped} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET fighterEquipped = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.fighterEquipped, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setUserGoldAmount", error);
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
    async setMageEquipped(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET mageEquipped = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.mageEquipped, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setUserGoldAmount", error);
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
    async setrogueEquipped(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET rogueEquipped = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.rogueEquipped, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setUserGoldAmount", error);
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
    async setfighter0Unlocked(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET fighter0Unlocked = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.fighter0Unlocked, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setfighter0Unlocked", error);
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
    async setfighter1Unlocked(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET fighter1Unlocked = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.fighter1Unlocked, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setfighter1Unlocked", error);
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
    async setfighter2Unlocked(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET fighter2Unlocked = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.fighter2Unlocked, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setfighter2Unlocked", error);
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
    async setfighter3Unlocked(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET fighter3Unlocked = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.fighter3Unlocked, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setfighter3Unlocked", error);
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
    async setfighter4Unlocked(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET fighter4Unlocked = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.fighter4Unlocked, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setfighter4Unlocked", error);
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
    async setmage0Unlocked(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET mage0Unlocked = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.mage0Unlocked, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setmage0Unlocked", error);
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
    async setmage1Unlocked(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET mage1Unlocked = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.mage1Unlocked, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setmage1Unlocked", error);
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
    async setmage2Unlocked(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET mage2Unlocked = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.mage2Unlocked, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setmage2Unlocked", error);
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
    async setmage3Unlocked(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET mage3Unlocked = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.mage3Unlocked, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setmage3Unlocked", error);
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
    async setmage4Unlocked(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET mage4Unlocked = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.mage4Unlocked, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setmage4Unlocked", error);
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
    async setrogue0Unlocked(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET rogue0Unlocked = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.rogue0Unlocked, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setrogue0Unlocked", error);
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
    async setrogue1Unlocked(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET rogue1Unlocked = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.rogue1Unlocked, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setrogue1Unlocked", error);
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
    async setrogue2Unlocked(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET rogue2Unlocked = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.rogue2Unlocked, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setrogue2Unlocked", error);
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
    async setrogue3Unlocked(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET rogue3Unlocked = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.rogue3Unlocked, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setrogue3Unlocked", error);
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
    async setrogue4Unlocked(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `UPDATE users SET rogue4Unlocked = ?  WHERE userName = ?`;
            dbConnection.query({
                sql: query,
                values: [ctx.params.rogue4Unlocked, ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::setrogue4Unlocked", error);
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
    async createAcct(ctx) {
        //console.log(`update gold called with: ${ctx.params.gold} and ${ctx.params.userName}`);
        return new Promise((resolve, reject) => {
            const query = `insert into users values(?,default,default,default,default,default,default,default,
default,default,default,default,default,default,default,default,default,default,default,default,default,default,default,default,default,default,default,default,default,default,default,default,default,default,default,default,default,default,default)`;
            dbConnection.query({
                sql: query,
                values: [ ctx.params.userName]
            }, (error, tuples) => {
                if (error) {
                    console.log("Connection error in UsersController::createAcct", error);
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
