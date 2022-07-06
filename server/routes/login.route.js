const loginRouter = require('express').Router()
const postLogin = require('../controllers/login.js')

loginRouter.post('/', postLogin)

module.exports = loginRouter