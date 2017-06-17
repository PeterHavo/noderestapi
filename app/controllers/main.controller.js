//const contacts = require('../../data.js'),
const Contact = require('../model/Contact.js');



module.exports = {
    allContacts: allContacts,
    oneContact: oneContact,
    postContact: postContact,
    putContact: putContact,
    deleteContact: deleteContact
}

function allContacts(req, res) {
    Contact.find({}, (err, contacts) => {
        if (err) {
            res.status(404).json({ message: 'there are no contats ' });
        }
        res.json(contacts);
    })


}

function oneContact(req, res) {

    const _id = req.params.cont;

    Contact.findOne({ _id }, (err, contact) => {
        if (err) {
            res.status(404).json({ message: 'that was an error during searh' });
        }
        else {
            res.json(contact);
        }


    });
}

function postContact(req, res) {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
        if (err)
            throw err;
        res.json(contact);
    });
}


function putContact(req, res) {
    const _id = req.params.id;
    Contact.findOneAndUpdate({ _id }, req.body, {new: true}, (err, contact)=>{
        if (err){
            res.status(404).json(err);
        }else{
            res.json(contact);
        }

    } );
}

function deleteContact(req, res) {
    const _id = req.params.id;
    Contact.findOneAndRemove({ _id }, (err, contact) => {
        if (err) {
            res.status(404).json(err);
        } else if (!contact) {
            res.status(404).json({ message: 'Can not find contact during deletation ' })
        } else {
            res.json(`contact with ${_id} was deleted`)
        }
    })

}