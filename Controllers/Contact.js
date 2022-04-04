const Contact = require("../Model/Contact")


exports.AddContact=async(req,res)=>{
    try {
        const newContact=new Contact(req.body)
        const found= await Contact.findOne(req.body.email)
        if(found){
            return res.status(400).send('email is already existed')
        }
        await newContact.save()
        res.status(200).send({newContact, Msg: 'new contact was added'})
    } catch (error) {
        res.status(500).send('Contact could not be added')
    }
}

exports.GetContact= async(req,res)=>{
    try {
        const Contacts= await Contact.find()
        res.status(200).send({Contacts, Msg: 'List of all contacts'})
    } catch (error) {
        res.status(500).send('Contact could not be get')
        
    }
}

exports.DeleteContact= async(req,res)=>{
    try {
        const {id}=req.params
        const deleteContact= await Contact.findByIdAndDelete(id)
        res.status(200).send('Contact is deleted')
    } catch (error) {
        res.status(500).send('Contact could not be delete')
        
    }
}

exports.UpdateContact= async(req,res)=>{
    try {
        const {id}=req.params
        const upContact= await Contact.findByIdAndUpdate(id,{$set:req.body})
        res.status(200).send('Contact is updated')
    } catch (error) {
        res.status(500).send('Contact could not be update')
        
    }
}

exports.GetOneContact= async(req,res)=>{
    try {
        const oneContact= await Contact.findById()
        res.status(200).send({oneContact, Msg: 'Contact is found'})
    } catch (error) {
        res.status(500).send('Contact could not be get')
        
    }
}