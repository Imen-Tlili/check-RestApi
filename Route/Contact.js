const express=require('express')
const { AddContact, GetContact, DeleteContact, UpdateContact } = require('../Controllers/Contact')
const contact = require('../Model/Contact')



const ContactRouter=express.Router()

ContactRouter.post('/addContact',AddContact)
ContactRouter.get('/getContact',GetContact)
ContactRouter.delete('/deleteContact/:id',DeleteContact)
ContactRouter.put('/updateContact/:id',UpdateContact)
ContactRouter.get('/getOneContact/:id',GetOneContact)

module.exports=ContactRouter