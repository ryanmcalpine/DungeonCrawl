const { Router } = require('express')
const monsterController = require('../controllers/monsterController')

const monsterRouter = Router()

monsterRouter.use((req, res, next) => {
   console.log('Request made to /MONSTERS ROUTE')
   next()
})

monsterRouter.get('/allmonsters', async(req, res) => {
   try {
      let results = await monsterController.allMonsters()
      res.json(results);
   }
   catch(e) {
      console.log(e)
      res.status(500)
   }
})

monsterRouter.get('/readmonstermoves', async(req, res) => {
   const {moveName, damageType, damageValue, selfStatusEffects, targetStatusEffects} = req.body
   try {
      await monsterController.monsterMoves(moveName, damageType, damageValue, selfStatusEffects, targetStatusEffects)
      res.status(201).send({msg: 'Monster Moves Read'})
   }
   catch(e) {
      console.log(e)
   }
})

module.exports = monsterRouter;