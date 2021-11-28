const Authorize = require('../app/Middleware/Authorize.js');
const VerifyJWT = require('../app/Middleware/VerifyJWT.js');


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
