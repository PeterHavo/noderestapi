

// create a new express router
const express = require('express'),
  mainController = require('./controllers/main.controller.js'),
  router = express.Router(),
  contacts = require('../data.js');
  
//   mainController = require('./controllers/main.controller'),
//   eventController = require('./controllers/events.controller');
 

 

// export router
module.exports = router;


// define routes

router.get('/api/contacts', mainController.allContacts);

// router.get('/api/contacts', (req, res)=>{
//     if(!contacts){
//       res.status(404).json({message:'No contacts found '});
//     }
//     res.json(contacts);
//     // res.send(JSON.stringify(contacts));
// });


//gell all contacts
router.get('/api/contacts/:id', mainController.oneContact);



// router.get('/api/contacts/:id', (req, res)=>{
//       const reqId =  req.params.id;
//       console.log(reqId);
//       let contact = contacts.filter(cont => {
//         return cont.id == reqId;
//       } )
//       console.log(contact);
//     res.json(contact);

// });
// // define routes
// router.get('/', mainController.showHome);


// post a contacts 
router.post('/api/contacts', mainController.postContact);



//update contact

router.put('/api/contacts/:id', mainController.editContact);

//delete one id 

router.delete('/api/contacts/:id', mainController.deleteContact);
