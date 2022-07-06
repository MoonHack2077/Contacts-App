const bcrypt = require('bcrypt')
const User = require('../models/User.js')

const postUser = async (request, response) => {
  const { name, email, password } = request.body

  //The salt is the algoritmic complexity for the encryptation
  const salt = await bcrypt.genSalt(10)
  const passwordHash = await bcrypt.hash(password, salt)
  const newUser = new User({
    name,
    email,
    password: passwordHash,
  })

  const savedUser = await newUser.save()
  response.json(savedUser)
}

const getAllUsers = async (request, response) => {
  //Populate completes the info of the argument
  //As second armgument we can set the properties that we want to get
  //For example, in this case we do not need that it returns the userId
  //If we want to show a value que set the value : 1, otherwise 0
  const users = await User.find({}).populate('contacts', {
    name: 1,
    phoneNumber: 1,
    email: 1,
    storageLocation: 1
  })
  response.json(users)
}

const getOneUser = async (request, response) => {
  const { id } = request.params
  const user = await User.findById(id).populate('contacts', {
    name: 1,
    phoneNumber: 1,
    email: 1,
    storageLocation: 1
  })
  response.json(user)
}

const deleteUser = async (request, response) => {
  try{
    const { id } = request.params
    const deletedUser = await User.findOneAndRemove(id)
    response.json(deletedUser)
  }catch(e){
    console.log(e)
  }
  
}

const putUser = async (request, response) => {
  const { id } = request.params
  const { email, name, password } = request.body
  
  const updatedUser = await User.findByIdAndUpdate(id, {
    email,
    name,
    password
  }, { new: true })

  response.json(updatedUser)
}


module.exports = {
  getOneUser,
  getAllUsers,
  putUser,
  postUser,
  deleteUser
}