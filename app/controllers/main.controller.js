//const contacts = require('../../data.js'),
Contact = require('../model/Contact.js');


module.exports = {
    allContacts: allContacts,
    oneContact: oneContact,
    postContact: postContact,
    editContact: editContact,
    deleteContact: deleteContact
}

function allContacts(req, res) {
    
    if (!contacts) { res.status(404).json({ message: 'No contacts found ' }); }
    res.json(contacts);

}

function oneContact(req, res) {
    const reqId = req.params.id;
    let contact = contacts.filter(cont => {
        return cont.id == reqId
    })
    if (!contact.length > 0) { res.status(404).json({ message: 'This  contact found ' }); }
    res.json(contact[0]);
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
    let contact = contacts.filter(cont => {
        return cont.id == reqContact
    })[0];
    console.log(contact);
    // find index of contact 
    const index = contacts.indexOf(contact);
    // get all keys 
    const keys = Object.keys(req.body);
    //loop troght all keys and set to req.body
    keys.forEach(key=>{
        contact[key] = req.body[key];
    })

    // update selected conatct in contacts
    contacts[index] = contact; 
    res.json(contacts[index]);






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