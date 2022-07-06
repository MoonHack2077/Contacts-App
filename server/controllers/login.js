const jwt = require('jsonwebtoken')
const User = require('../models/User.js')
const bcrypt = require('bcrypt')

module.exports = async (request, response) => {
    try{
        const { email, password } = request.body
        const user = await User.findOne({ email })
        const verify = user === null ? false : bcrypt.compare(password, user.password)
        
        if(!(user && verify)){
            return response.status(400).json({ error: 'Invalid user or password' }).end()
        }
        const userForToken = {
            id: user._id,
            email
        }
        //The first argument sended is the json to convert, and the second one is the secret word to create the token
        const token = jwt.sign(userForToken, process.env.SECRETWORD)

        response.send({
            name: user.name,
            email,
            token,
            id: user._id
        })
    } catch(error){
        console.log(error)
    }
}
