const dbConnection = require('../../database/mySQLconnect');
const setAccessToken = require('../../config/setAccessToken');


require('dotenv').config();

class LoginController {
    async authorizeUser(ctx) {
        return new Promise((resolve, reject) => {

	    // Right up here, you could inspect the provided uers_id to
	    // make sure that it is, at the surface, a legitimate ID.
	    // For example, if user ids are suppose to be email addresses,
	    // you can at least make sure that user's input is consistent
	    // with the format of email addresses. 
	        console.log(`Logging in: ${ctx.params.userName}`);
            let query = "SELECT * FROM users WHERE userName = ?";
            dbConnection.query(
                {
                    sql: query,
                    values: [ctx.params.userName]
                }, (error, tuples) => {
                    if (error) {
                        console.log("Query error.", error);
                        return reject(`Query error. Error msg: error`);
                    }
                    if (tuples.length === 1) {  // Did we have a matching user record?
                        setAccessToken(ctx, tuples[0]);
                        console.log('from studentRecord. About to return ', tuples[0]);
                        ctx.body = {
                            status: "OK",
                            user: tuples[0],
                        };
                    } else {
                        console.log('Not able to identify the user.');
			return reject('No such user.');
                    }
                    return resolve();
                }
            )
        }).catch(err => {
            console.log('authorize in LoginController threw an exception. Reason...', err);
	    ctx.status = 200;
            ctx.body = {
                status: "Failed",
                error: err,
                user: null
            };
        });

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

module.exports = LoginController;
