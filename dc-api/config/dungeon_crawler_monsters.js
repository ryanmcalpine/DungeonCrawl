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
    prefix: '/api/v1'
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
loginRouter.get('/:user_id', LoginController.authorizeUser, (err) => console.log("routers.js: loginRouter error:", err));

const MonstersController = new (require('../app/Controllers/MonsterController.js'))();
const monstersRouter = require('koa-router')({
    prefix: '/monsters'
});

monstersRouter.use(VerifyJWT);
monstersRouter.get('/:cycleID', Authorize('admin'),MonstersController.numTransactions, err => console.log(`numTransactions ran into an error: ${err}`));
monstersRouter.get('/:cycleID/:accountID/one-account', Authorize('admin'), MonstersController.one_account,err => console.log(`one_account ran into an error: ${err}`));
monstersRouter.get('/:cycleID/:routeID/trans-for-route', Authorize('admin'),MonstersController.trans_for_route, err => console.log(`trans_for_route ran into an error: ${err}`));
monstersRouter.get('/:cycleID/all-routes', Authorize('admin'), MonstersController.all_routes,err => console.log(`trans_for_route ran into an error: ${err}`));
monstersRouter.get('/:cycleID/:marketID/trans-for-market', Authorize('admin'), MonstersController.trans_for_market,err => console.log(`trans_for_route ran into an error: ${err}`));
monstersRouter.get('/get-cycleIDS/cid',Authorize('admin'),MonstersController.get_cycleIDS,err => console.log(`get_cycleIDS ran into an error: ${err}`));
monstersRouter.get('/get-marketIDS/mid',Authorize('admin'),MonstersController.get_marketIDS,err => console.log(`get_marketIDS ran into an error: ${err}`));
monstersRouter.get('/get-routeIDS/rid',Authorize('admin'),MonstersController.get_routeIDS,err => console.log(`get_routeIDS ran into an error: ${err}`));
monstersRouter.get('/get-CurrCycle/gcc',Authorize('admin'),MonstersController.get_CurrCycle,err => console.log(`get_CurrCycle ran into an error: ${err}`));
monstersRouter.get('/getAcctName/:accountID',Authorize('admin'),MonstersController.get_AcctName,err => console.log(`get_AcctName ran into an error: ${err}`));

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
