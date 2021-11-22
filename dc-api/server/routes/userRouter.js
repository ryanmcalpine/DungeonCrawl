const { Router } = require('express')
const userController = require('../controllers/userController')
const userRouter = Router()


userRouter.use((req, res, next) => {
   console.log('Request made to /USERS ROUTE')
   next()
})

userRouter.get('/allusers', async(req, res) => {
   try {
      let results = await userController.allUsers()
      res.json(results);
   }
   catch(e) {
      console.log(e)
      res.status(500)
   }
})

userRouter.post('/createnewaccount', async(req, res) => {
   const {username} = req.body
   console.log(req.body)
   try {
      await userController.newUser(username)
      res.status(201).send({msg: 'Created User'})
   }
   catch(e) {
      console.log(e)
   }
})
userRouter.get('/login/:username', async(req, res) => {
   //const {username} = req.body
   //console.log(req.body)
   try {
      let results = await userController.userLogin(req.params.username)
      res.json(results);
   }
   catch(e) {
      console.log(e)
   }
})
userRouter.get('/highScores', async(req, res) => {
   //const {username} = req.body
   //console.log(req.body)
   try {
      let results = await userController.highScores()
      res.json(results);
   }
   catch(e) {
      console.log(e)
   }
})



module.exports = userRouter;