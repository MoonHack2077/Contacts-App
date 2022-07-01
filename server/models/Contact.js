const mongoose = require('mongoose')
const validator = require('mongoose-unique-validator')
const { Schema, model } = mongoose

// Creating a new Schema to have a better structure at our DB
const contactSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  storageLocation: {
    type: String,
    required: true
  },
  owner: { 
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

contactSchema.set('toJSON', {
  transform: (document, returnObject) =>{
    returnObject.id = returnObject._id

	  //Normally, delete, is a bad practice!!!	  
    delete returnObject._id
    delete returnObject.__v	  
  }
})

contactSchema.plugin(validator)

// Creating a model with the schema which we create before
const Contact = model('Contact', contactSchema)
 
module.exports = Contact
