//const contacts = require('../../data.js'),
const Contact = require('../model/Contact.js');
const mongoose = require('mongoose');


module.exports = {
    allContacts: allContacts,
    oneContact: oneContact,
    postContact: postContact,
    editContact: editContact,
    deleteContact: deleteContact
}

function allContacts(req, res) {
    Contact.find({}, (err, contacts)=>{
        if (err){
            res.status(404).json({message:'there are no contats '});
        }
        res.json(contacts);
    })
    

}

function oneContact(req, res) {

  const _id = req.params.cont;
 
  Contact.findOne({_id}, (err, contact)=>{
      if (err){
      res.status(404).json({message: 'that was an error during searh'});
    }

   else {
       res.json(contact);
     console.log(contact);
   }

     
  })

 
  
  
   
    // Contact.findOne({_id:  idString},(err, contact)=>{
    //     if (err)
    //        throw err ; 
        
    //         res.json(contact);
    //     }
    // );
}

function postContact(req, res) {


    // const newContact = {
    //     id: contacts.length + 1,
    //     first_name: req.body.first_name,
    //     last_name: req.body.last_name,
    //     email: req.body.email,
    //     website: req.body.website
    // }
  let newContact = new Contact (req.body);
    // contacts.push(newContact);
    newContact.save((err, contact)=>{
        if (err)
            throw err;
        
          res.json(contact);  

    })
    // res.json(newContact);
}


function editContact(req, res) {
    let reqContact = req.params.id;
    let contact = Contact.filter(cont => {
        return cont.id == reqContact
    })[0];
    console.log(contact);
    // find index of contact 
    const index = Contact.indexOf(contact);
    // get all keys 
    const keys = Object.keys(req.body);
    //loop troght all keys and set to req.body
    keys.forEach(key=>{
        contact[key] = req.body[key];
    })

    // update selected conatct in contacts
   Contact[index] = contact; 
    res.json(Contact[index]);






}

function deleteContact (req, res) {
    let reqId = req.params.id;
    let contact = contacts.filter(con => { 
        return con.id == reqId
    })[0];
    const index =  contacts.indexOf(contact);
    contacts.splice(index, 1);
    res.json({message:`contact with following ID was deleted:${reqId}`});

}