//dotenv is necessary to use environment variables
require('dotenv').config()
require('./mongo.js')

const express = require('express')
const cors = require('cors')
const app = express()

//ROUTES
const usersRouter = require('./controllers/users.js')
const notesRouter = require('./controllers/notes.js')
const loginRouter = require('./controllers/login.js')

//MIDDLEWARES
const notFound = require('./middlewares/notFound.js')
const handleError = require('./middlewares/handleErrors.js')

// CORS allow the acces from spesific origins
app.use(cors())

// MIDDLEWARE are functions which intercept the request that is passing through the API
app.use(express.json())

//Using routes to have a clean code
app.use('/login', loginRouter)
app.use('/api/notes', notesRouter)
app.use('/api/users', usersRouter)

//Error managament
app.use(notFound)
app.use(handleError)

// Activating the PORT
const { PORT } = process.env
const server = app.listen(PORT, () => {
  console.log(`App listening at port: ${PORT}`)
})

module.exports = { app, server }
