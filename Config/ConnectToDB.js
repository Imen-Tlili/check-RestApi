const mongoose = require('mongoose')

const ConnectToDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database is already connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports=ConnectToDB