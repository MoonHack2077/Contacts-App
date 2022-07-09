const contactsRouter = require('express').Router()
const userExtractor = require('../middlewares/userExtractor.js')

const { postContact, getAllContacts, getOneContact, deleteContact, putContact } = require('../controllers/contacts.js')

contactsRouter.get('/', getAllContacts)

contactsRouter.get('/:id', getOneContact)

contactsRouter.post('/', userExtractor, postContact)

contactsRouter.delete('/:id', userExtractor, deleteContact)

contactsRouter.put('/:id', putContact)

module.exports = contactsRouter
