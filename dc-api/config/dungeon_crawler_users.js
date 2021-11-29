const Authorize = require('../app/Middleware/Authorize.js');
const VerifyJWT = require('../app/Middleware/VerifyJWT.js');
const {body} = require("koa/lib/response");
const bodyParser = require('koa-bodyparser');

/*
|--------------------------------------------------------------------------
| Default router
|--------------------------------------------------------------------------
|
| Default router is used to define any routes that don't belong to a
| controller. Also used as a parent container for the other routers.
|
*/
const router = require('koa-router')({
    prefix: '/api'
});

router.get('/', function (ctx) {
    console.log('router.get(/)');
    return ctx.body = 'What is up?';
});


/*
|--------------------------------------------------------------------------
| login router
|--------------------------------------------------------------------------
|
| Description
|
*/


const LoginController = new (require('../app/Controllers/LoginController.js'))();
const loginRouter = require('koa-router')({
    prefix: '/login'
});
loginRouter.get('/:userName', LoginController.authorizeUser, (err) => console.log("routers.js: loginRouter error:", err));

const UsersController = new (require('../app/Controllers/UsersController.js'))();
const userRouter = require('koa-router')({
    prefix: '/users'
});

userRouter.use(VerifyJWT);
userRouter.get('/all-users', UsersController.allUsers, err => console.log(`all-users ran into an error: ${err}`));
userRouter.get('/highScores', UsersController.getHighScore, err => console.log(`getHighScores ran into an error: ${err}`));
userRouter.get('/getUser/:userName/', UsersController.getUser);
userRouter.get('/getGold/:userName/', UsersController.getGold, err => console.log(`getGold ran into an error: ${err}`));
userRouter.get('/getFighterMaxHP/:userName/', UsersController.getFighterMaxHP, err => console.log(`getFighterMaxHP ran into an error: ${err}`));
userRouter.get('/getfighterPhysicalAttack/:userName/', UsersController.getfighterPhysicalAttack, err => console.log(`getfighterPhysicalAttack ran into an error: ${err}`));
userRouter.get('/getfighterMagicalAttack/:userName/', UsersController.getfighterMagicalAttack, err => console.log(`getfighterMagicalAttack ran into an error: ${err}`));
userRouter.get('/getfighterPhysicalDefense/:userName/', UsersController.getfighterPhysicalDefense, err => console.log(`getfighterPhysicalDefense ran into an error: ${err}`));
userRouter.get('/getfighterMagicDefense/:userName/', UsersController.getfighterMagicDefense, err => console.log(`getfighterMagicDefense ran into an error: ${err}`));
userRouter.get('/getmageMaxHP/:userName/', UsersController.getmageMaxHP, err => console.log(`getmageMaxHP ran into an error: ${err}`));
userRouter.get('/getmagePhysicalAttack/:userName/', UsersController.getmagePhysicalAttack, err => console.log(`getmagePhysicalAttack ran into an error: ${err}`));
userRouter.get('/getmageMagicalAttack/:userName/', UsersController.getmageMagicalAttack, err => console.log(`getmageMagicalAttack ran into an error: ${err}`));
userRouter.get('/getmagePhysicalDefense/:userName/', UsersController.getmagePhysicalDefense, err => console.log(`getmagePhysicalDefense ran into an error: ${err}`));
userRouter.get('/getmageMagicDefense/:userName/', UsersController.getmageMagicDefense, err => console.log(`getmageMagicDefense ran into an error: ${err}`));
userRouter.get('/getrogueMaxHP/:userName/', UsersController.getrogueMaxHP, err => console.log(`getrogueMaxHP ran into an error: ${err}`));
userRouter.get('/getroguePhysicalAttack/:userName/', UsersController.getroguePhysicalAttack, err => console.log(`getroguePhysicalAttack ran into an error: ${err}`));
userRouter.get('/getrogueMagicalAttack/:userName/', UsersController.getrogueMagicalAttack, err => console.log(`getrogueMagicalAttack ran into an error: ${err}`));
userRouter.get('/getroguePhysicalDefense/:userName/', UsersController.getroguePhysicalDefense, err => console.log(`getroguePhysicalDefense ran into an error: ${err}`));
userRouter.get('/getrogueMagicDefense/:userName/', UsersController.getrogueMagicDefense, err => console.log(`getrogueMagicDefense ran into an error: ${err}`));
userRouter.get('/getFighterSpeed/:userName/', UsersController.getFighterSpeed, err => console.log(`getFighterSpeed ran into an error: ${err}`));
userRouter.get('/getMageSpeed/:userName/', UsersController.getMageSpeed, err => console.log(`getMageSpeed ran into an error: ${err}`));
userRouter.get('/getRogueSpeed/:userName/', UsersController.getRogueSpeed, err => console.log(`getRogueSpeed ran into an error: ${err}`));
userRouter.get('/getfighterEquipped/:userName/', UsersController.getfighterEquipped, err => console.log(`getfighterEquipped ran into an error: ${err}`));
userRouter.get('/getmageEquipped/:userName/', UsersController.getmageEquipped, err => console.log(`getmageEquipped ran into an error: ${err}`));
userRouter.get('/getrogueEquipped/:userName/', UsersController.getrogueEquipped, err => console.log(`getrogueEquipped ran into an error: ${err}`));
userRouter.get('/getfighter0Unlocked/:userName/', UsersController.getfighter0Unlocked, err => console.log(`getfighter0Unlocked ran into an error: ${err}`));
userRouter.get('/getfighter1Unlocked/:userName/', UsersController.getfighter1Unlocked, err => console.log(`getfighter1Unlocked ran into an error: ${err}`));
userRouter.get('/getfighter2Unlocked/:userName/', UsersController.getfighter2Unlocked, err => console.log(`getfighter2Unlocked ran into an error: ${err}`));
userRouter.get('/getfighter3Unlocked/:userName/', UsersController.getfighter3Unlocked, err => console.log(`getfighter3Unlocked ran into an error: ${err}`));
userRouter.get('/getfighter4Unlocked/:userName/', UsersController.getfighter4Unlocked, err => console.log(`getfighter4Unlocked ran into an error: ${err}`));
userRouter.get('/getmage0Unlocked/:userName/', UsersController.getmage0Unlocked, err => console.log(`getmage0Unlocked ran into an error: ${err}`));
userRouter.get('/getmage1Unlocked/:userName/', UsersController.getmage1Unlocked, err => console.log(`getmage1Unlocked ran into an error: ${err}`));
userRouter.get('/getmage2Unlocked/:userName/', UsersController.getmage2Unlocked, err => console.log(`getmage2Unlocked ran into an error: ${err}`));
userRouter.get('/getmage3Unlocked/:userName/', UsersController.getmage3Unlocked, err => console.log(`getmage3Unlocked ran into an error: ${err}`));
userRouter.get('/getmage4Unlocked/:userName/', UsersController.getmage4Unlocked, err => console.log(`getmage4Unlocked ran into an error: ${err}`));
userRouter.get('/getrogue0Unlocked/:userName/', UsersController.getrogue0Unlocked, err => console.log(`getrogue0Unlocked ran into an error: ${err}`));
userRouter.get('/getrogue1Unlocked/:userName/', UsersController.getrogue1Unlocked, err => console.log(`getrogue1Unlocked ran into an error: ${err}`));
userRouter.get('/getrogue2Unlocked/:userName/', UsersController.getrogue2Unlocked, err => console.log(`getrogue2Unlocked ran into an error: ${err}`));
userRouter.get('/getrogue3Unlocked/:userName/', UsersController.getrogue3Unlocked, err => console.log(`getrogue3Unlocked ran into an error: ${err}`));
userRouter.get('/getrogue4Unlocked/:userName/', UsersController.getrogue4Unlocked, err => console.log(`getrogue4Unlocked ran into an error: ${err}`));
userRouter.get('/updateUserGold/:gold/:userName/',UsersController.updateGold, err => console.log(`setUserGoldAmount ran into an error: ${err}`));
userRouter.get('/setFighterEquipped/:fighterEquipped/:userName/',UsersController.setFighterEquipped, err => console.log(`setUserGoldAmount ran into an error: ${err}`));
userRouter.get('/setMageEquipped/:mageEquipped/:userName/',UsersController.setMageEquipped, err => console.log(`setMageEquipped ran into an error: ${err}`));
userRouter.get('/setRogueEquipped/:rogueEquipped/:userName/',UsersController.setrogueEquipped, err => console.log(`setrogueEquipped ran into an error: ${err}`));


/**
 * Register all of the controllers into the default controller.
 */
router.use(
    '',
    loginRouter.routes(),
    userRouter.routes()
);

module.exports = function (app) {
    app.use(router.routes());
    app.use(router.allowedMethods());

};
