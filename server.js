// Imports
const express = require('express') ;

const animals = require("./routes/api/breeds")

//Middleware function - returns http://localhost:3000/api/breeds:2022-05-01T16:48:20-04:00 in terminal when server is run. 
//const logger = require('./middleware/logger')

// Config
require("dotenv").config()

// Initialize Express 
const server = express()


// Body Parser Middleware - allows us to handle raw json
server.use(express.json())

//Middleware to allow us to handle form submissions - passed in object {extended:false} allows us to handle url encoded data 
server.use(express.urlencoded({extended:false}))


// Connecting Breeds API Route- was require('./routes/api/breeds')) but I created animals variable above 
server.use('/animals', animals)

server.get("/", (req,res)=>{
  res.send(url)
})





//Create PORT
const PORT = process.env.PORT || 3000




//Listen at PORT
   server.listen(PORT, ()=>
     console.log(`Server is listening at port: ${PORT}`))




     

