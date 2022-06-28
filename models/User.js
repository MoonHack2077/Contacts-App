const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const { Schema, model } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  name: String,
  password: {
    type: String,
    unique: true,
    required: true
  },
  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'Note'
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
