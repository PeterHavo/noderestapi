  contacts = require('../../data.js');

  module.exports = {
      allContacts: allContacts,
      oneContact: oneContact,
      postContact: postContact
  }

  function allContacts (req, res) {
    if(!contacts){  res.status(404).json({message:'No contacts found '});}
    res.json(contacts);

  }

  function oneContact (req, res) {
    const reqId = req.params.id;
    let contact = contacts.filter(cont => {
        return  cont.id == reqId
        })
    if(!contact.length > 0 ){  res.status(404).json({message:'This  contact found '});}
    res.json(contact[0]);
  }

  function postContact (req, res) {
      const newContact = {
          id: contacts.length + 1,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          website: req.body.website
      }
      contacts.push(newContact);
      console.log((newContact));
      res.json(newContact);
  }

