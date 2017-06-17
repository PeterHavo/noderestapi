const mongoose = require('mongoose'),
Schema = mongoose.Schema;

// create schema 
const contactSchema = new Schema({

  first_name:{type:String},
  last_name:{type:String},
  email:{type:String},
  web:{type:String}


});


// create model

const contactModel = mongoose.model('Contact' ,contactSchema);

// export model to use it other files

module.exports = contactModel;