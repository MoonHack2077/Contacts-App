const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const { Schema, model } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    unique: true,
    required: true
  },
  contacts: [{
    type: Schema.Types.ObjectId,
    ref: 'Contact'
  }]
})

const User = model('User', userSchema)

userSchema.set('toJSON', {
  transform: (document, returnObject) =>{
  returnObject.id = returnObject._id

  //Normally, delete, is a bad practice!!!
  delete returnObject._id
  delete returnObject.__v
  delete returnObject.password
 }
})

userSchema.plugin(uniqueValidator)

module.exports = User
