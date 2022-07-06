//dotenv is necessary to use environment variables
require('dotenv').config()
require('./mongo.js')

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
// MIDDLEWARE are functions which intercept the request that is passing through the API
app.use(express.json())
// CORS allow the acces from spesific origins
app.use(cors())

//ROUTES
const usersRouter = require('./routes/users.route.js')
const contactsRouter = require('./routes/contacts.route.js')
const loginRouter = require('./routes/login.route.js')

//MIDDLEWARES
const notFound = require('./middlewares/notFound.js')
const handleError = require('./middlewares/handleErrors.js')

//Using routes to have a clean code
app.use('/login', loginRouter)
app.use('/api/contacts', contactsRouter)
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
