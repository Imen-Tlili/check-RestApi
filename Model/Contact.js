const mongoose=require('mongoose')

const ContactSchema=mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    email: {type: String, required: true, unique: true}

})

module.exports=mongoose.model('Contact', ContactSchema)