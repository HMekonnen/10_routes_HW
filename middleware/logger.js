const moment = require('moment')


//Middleware function - returns http://localhost:3000/api/breeds:2022-05-01T16:48:20-04:00 in terminal when server is run. 

const logger = (req,res,next)=>{
    console.log(
      `${req.protocol}://${req.get('host')}${
        req.originalUrl
      }:${moment().format()}`
      );
    next()
  }
  
  module.exports= logger


  const savingGrace = (req,res,next)=>{
    res.json({message: "Welcome to my page! "})
    next()
  }
  
  module.exports= savingGrace