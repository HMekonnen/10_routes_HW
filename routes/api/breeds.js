//Imports
const express = require('express')
const router = express.Router()
const uuid = require('uuid')
const dogs = require('../../Dogs')
const cats = require('../../Cats')
//const logger = require('../../middleware/logger')


/*=============================DOGS========================================== */



router
.route("/dogs")
.get((req, res)=>{                                  // Route 1: READ- Show all dog breeds - GET  = port/animals/dogs

    res.status(200).json(dogs)
})
.post((req,res)=>{                                  //Route 2:  Create - Log a new dog breed - POST
    
    const newBreed = {
        id: parseInt(uuid.v4()),
        breed: req.body.breed,
        size: req.body.size,
        shedding: req.body.shedding,
        sound: 'Barks'

    }
   
      if (!newBreed.breed || !newBreed.size || !newBreed.shedding){
     return res.status(400).json({msg: `Please include the following details: Breed Name, Size, Shedding Levels` })
    }  
   
    dogs.push(newBreed);
            //Follow up message = show entire breeds array 
 res.json(dogs);
}) 



router
.route("/dogs/:id")                                                                     // = http://localhost:3000/animals/dogs/id#
.get((req,res)=>{                                                                      // Route 3 - READ - Show specific breed using ID- used parseInt to ensure string is returned
const found = dogs.some(dog=> dog.id=== parseInt(req.params.id))

if (found){
 
  res.json(dogs.filter(dog =>dog.id === parseInt(req.params.id)));

} else {
  res.status(400).json({ msg:`No Breed with the id of: ${req.params.id} found.`})
}
})
.put((req,res)=>{                                                                        //Route 4:  UPDATE breed by ID 
    const found = dogs.some(dog=> dog.id=== parseInt(req.params.id))
    
    if (found) {
     const updatedog = req.body;
dogs.forEach(dog => {
    if (dog.id === parseInt(req.params.id)){
        dog.breed= updatedog.breed ? updatedog.breed : dog.breed;
        dog.size = updatedog.size ? updatedog.size: dog.size ;
        dog.shedding= updatedog.shedding ? updatedog.shedding : dog.shedding;

        res.json({msg: `${dog.breed} has been updated-`, dogs})
    }
})
    } else {
      res.status(400).json({ msg:`No dog with the id of: ${req.params.id} found.`})
    }
    
    })
.delete((req,res)=>{                                                                                         // Route 5: DELETE: Filter by id  
    const found = dogs.some(dog=> dog.id=== parseInt(req.params.id))
  
    if (found){
     
      res.json({msg:'Breed Deleted',dogs: dogs.filter(dog =>dog.id !== parseInt(req.params.id))});
    
    } else {
      res.status(400).json({ msg:`No dog with the id of: ${req.params.id} found.`})
    }
    
    });

   
   
   
   
 /*===================================CATS=================================================================================== */
      
    router
    .route("/cats")
    .get((req, res)=>{                                      // Route 1: Show all cat breeds - GET
        // = /animals/cats
        res.status(200).json(cats)
    })
    .post((req,res)=>{                                       //Route 2:  Create - Log a new cat breed - POST
        
        const newBreed = {
            id: parseInt(uuid.v4()),
            breed: req.body.breed,
            origin: req.body.origin,
            coat: req.body.coat,
            sound: 'Meow'
    
        }
                                // Using return instead of else
          if (!newBreed.breed || !newBreed.origin || !newBreed.coat){
         return res.status(400).json({msg: `Please include the following details: Breed Name, Origin, and Coat Length` })
        }  
                 // To add breed to array
        cats.push(newBreed);
                //Follow up message = show entire breeds array 
     res.json(cats);
    }) 
    

    router
    .route("/cats/:id") // = http://localhost:3000/animals/cats/id#
    .get((req,res)=>{                                                                            //Route 3:  READ - Show specific cat breed using ID - used parseInt to ensure string is returned
    const found = cats.some(cat=> cat.id=== parseInt(req.params.id))
   
     
    if (found){
     
      res.json(cats.filter(cat =>cat.id === parseInt(req.params.id)));
    
    } else {
      res.status(400).json({ msg:`No Breed with the id of: ${req.params.id} found.`})
    }
    })
    .put((req,res)=>{                                                                                //Route 4:  UPDATE breed by ID 
        const found = cats.some(cat=> cat.id=== parseInt(req.params.id))
        
        if (found) {
         const updatecat = req.body;
    cats.forEach(cat => {
        if (cat.id === parseInt(req.params.id)){
            cat.breed= updatecat.breed ? updatecat.breed : cat.breed;
            cat.origin = updatecat.size ? updatecat.size: cat.size ;
            cat.coat= updatecat.shedding ? updatecat.shedding : cat.shedding;
            cat.sound= updatecat.sound ? updatecat.sound : cat.sound;
    
            res.json({msg: `${cat.breed} has been updated-`, cats})
        }
    })
        } else {
          res.status(400).json({ msg:`No cat with the id of: ${req.params.id} found.`})
        }
        
        })
    .delete((req,res)=>{                                                                                // Route 5: DELETE: Filter by id  
        const found = cats.some(cat=> cat.id=== parseInt(req.params.id))
       
        if (found){
         
          res.json({msg:'Breed Deleted',cats: cats.filter(cat =>cat.id !== parseInt(req.params.id))});
        
        } else {
          res.status(400).json({ msg:`No Breed with the id of: ${req.params.id} found.`})
        }
        
        });
    


module.exports=router