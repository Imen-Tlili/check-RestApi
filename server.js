const express = require('express')
const ConnectToDB = require('./Config/connectToDB')
const ContactRouter = require('./Route/Contact')

require('dotenv').config()


const app = express()

ConnectToDB()

app.use(express.json())



app.use('/api/Contact',ContactRouter)



app.listen(process.env.port, console.log(`the server is running on the port ${process.env.port}`) )


