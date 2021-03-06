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

const ItemsController = new (require('../app/Controllers/ItemsController.js'))();
const itemsRouter = require('koa-router')({
    prefix: '/items'
});

itemsRouter.use(VerifyJWT);
itemsRouter.get('/getArmor/:itemID', ItemsController.getArmor, err => console.log(`getArmor ran into an error: ${err}`));
itemsRouter.get('/getConsumable/:itemID', ItemsController.getConsumable, err => console.log(`getConsumable ran into an error: ${err}`));


/**
 * Register all of the controllers into the default controller.
 */
router.use(
    '',
    loginRouter.routes(),
    itemsRouter.routes()
);

module.exports = function (app) {
    app.use(router.routes());
    app.use(router.allowedMethods());
};
