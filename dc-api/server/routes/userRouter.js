const { Router } = require('express')
const userDB = require('../controllers/UserController')
const router = Router()

router.get('/allusers', async(req, res) => {
    try {
        let results = await userDB.promise().all()
        console.log(results)
        res.json(results)
    }
    catch(e) {
        console.log('ERROR on /')
        res.sendStatus(500)
    }
})

router.post('/', async(req, res) => {
    const {username, email, password} = res.body()
    if (username, email, password) {
        try {
            let injection = await userDB.promise.newUser()
            res.status(201).send({msg: 'SUCCESSFUL user creation!'})
        }
        catch(e) {
            console.log('ERROR CREATING NEW USER')
            res.sendStatus(500)
        }
    }
})

module.exports = router;