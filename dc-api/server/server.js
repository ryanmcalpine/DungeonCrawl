const express = require('express')
const userRoutes = require('./routes/userRouter')
const monsterRoutes = require('./routes/monsterRouter')
const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use('/users', userRoutes)
app.use('/monsters', monsterRoutes)

app.listen(process.env.PORT || '3000', () => {
    console.log(`Server is running on port: ${process.env.PORT || '3000'}`)
})