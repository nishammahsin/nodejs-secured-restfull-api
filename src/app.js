const express = require('express')
const userRouter = require('./routers/user')
const practionerRouter = require('./routers/practitioner')
const port = process.env.PORT
require('./db/db')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(practionerRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})