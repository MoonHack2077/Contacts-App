const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const User = require('../models/User.js')

//The path is relative to the path at he index
//the path at the index is: /api/users
//So this path is according to the last one
userRouter.post('/', async (request, response)=>{
  const { username, name, password } = request.body

  //The second parameter is the algoritmic complexity for the encryptation
  const passwordHash = await bcrypt.hash(password, 10)
  const newUser = new User({
    username,
    name,
    password: passwordHash,
  })

  const savedUser = await newUser.save()
  response.json(savedUser)
})

userRouter.get('/', async (request, response)=>{
  //Populate completes the info of the argument
  //As second armgument we can set the properties that we want to get
  //For example, in this case we do not need that it returns the userId
  //If we want to show a value que set the value : 1, otherwise 0
  const users = await User.find({}).populate('notes', {
    content: 1,
    date: 1
  })
  response.json(users)
})

userRouter.get('/:id', async (request, response)=>{
  const { id } = request.params
  const user = await User.findById(id).populate('notes', {
    content: 1,
    date: 1
  })
  response.json(user)
})

userRouter.delete('/:id', async (request, response)=>{
  const { id } = request.params
  const deletedUser = await User.findOneAndRemove(id)
  response.json(deletedUser)
})

userRouter.put('/:id', async (request, response)=>{
  const { id } = request.params
  const { username, name, password } = request.body
  
  const updatedUser = await User.findByIdAndUpdate(id, {
    username,
    name,
    password
  })

  response.json(updatedUser)
})

module.exports = userRouter
