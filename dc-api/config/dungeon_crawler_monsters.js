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
    return ctx.body = 'Please kill me Im so tired';
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

const MonstersController = new (require('../app/Controllers/MonsterController.js'))();
const monstersRouter = require('koa-router')({
    prefix: '/monsters'
});

monstersRouter.use(VerifyJWT);
monstersRouter.get('/allMonsters',MonstersController.allMonsters, err => console.log(`allMonsters ran into an error: ${err}`));
monstersRouter.get('/getMonster/:monsterID/',MonstersController.getMonster, err => console.log(`getMonster ran into an error: ${err}`));
monstersRouter.get('/getMaxHP/:monsterID/',MonstersController.getMaxHP, err => console.log(`getMaxHP ran into an error: ${err}`));
monstersRouter.get('/getPhysicalATK/:monsterID/',MonstersController.getPhysicalATK, err => console.log(`getPhysicalATK ran into an error: ${err}`));
monstersRouter.get('/getPhysicalDEF/:monsterID/',MonstersController.getPhysicalDEF, err => console.log(`getPhysicalDEF ran into an error: ${err}`));
monstersRouter.get('/getMagicATK/:monsterID/',MonstersController.getMagicATK, err => console.log(`getMagicATK ran into an error: ${err}`));
monstersRouter.get('/getMagicDEF/:monsterID/',MonstersController.getMagicDEF, err => console.log(`getMagicDEF ran into an error: ${err}`));
monstersRouter.get('/getSpeed/:monsterID/',MonstersController.getSpeed, err => console.log(`getSpeed ran into an error: ${err}`));


/**
 * Register all of the controllers into the default controller.
 */
router.use(
    '',
    loginRouter.routes(),
    monstersRouter.routes()
);

module.exports = function (app) {
    app.use(router.routes());
    app.use(router.allowedMethods());
};
