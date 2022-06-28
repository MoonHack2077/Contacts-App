//dotenv is necessary to use environment variables
require('dotenv').config()
require('./mongo.js')

const notFound = require('./middlewares/notFound.js')
const handleError = require('./middlewares/handleErrors.js')
const usersRouter = require('./controllers/users.js')
const notesRouter = require('./controllers/notes.js')
const express = require('express')
const cors = require('cors')
const app = express()
const { PORT } = process.env

// CORS allow the acces from spesific origins
app.use(cors())

// MIDDLEWARE are functions which intercept the request that is passing through the API
app.use(express.json())

// app.get serves to get the route
app.get('/', (request, response) => {
  response.send('<h3>Hello world</h3>')
})

//Using routes to have a clean code
app.use('/api/notes', notesRouter)
app.use('/api/users', usersRouter)

//Error managament
app.use(notFound)
app.use(handleError)

// Activating the PORT
const server = app.listen(PORT, () => {
  console.log(`App listening at port: ${PORT}`)
})

module.exports = { app, server }
