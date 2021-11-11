const express = require('express')
const userRoutes = require('./routes/userRouter')
const app = express()

app.use(express.json())
app.use('/backend', userRoutes)

app.listen(process.env.PORT || '3000', () => {
    console.log(`Server is running on port: ${process.env.PORT || '3000'}`)
})