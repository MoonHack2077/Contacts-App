const jwt = require('jsonwebtoken')
const loginRouter = require('express').Router()
const User = require('../models/User.js')
const bcrypt = require('bcrypt')

loginRouter.post('/', async (request, response)=>{
    try{
        const { username, password } = request.body
        const user = await User.findOne({ username })
        const verify = user === null ? false : bcrypt.compare(password, user.passwordHash)

        if(!(user && verify)){
            response.status(400).json({ error: 'Invalidd user or password' }).end()
        }
        const userForToken = {
            id: user._id,
            username
        }
        //The first argument sended is the json to convert, and the second one is the secret word to create the token
        const token = jwt.sign(userForToken, process.env.SECRETWORD)

        response.send({
            name: user.name,
            username,
            token
        })
    }catch(error)    {
        console.log(error)
    }
})

module.exports = loginRouter