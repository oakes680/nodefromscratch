const express = require('express')
const helmet = require('helmet')
const userRouter = require('./api/users-router')
const server = express()

server.use(express.json())

server.use('/api', userRouter)

const port = process.env.PORT || 1983

server.listen(port, () => {
  console.log(`you are on ${port}`)
})