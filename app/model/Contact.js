const mongoose = require('mongoose'),
Schema = mongoose.Schema;

// create schema 
const contactSchema = new Schema({

  fisrt_name:{type:String, required:true},
  last_name:{type:String, required:true},
  email:{type:String, required:true},
  web:{type:String, required:true}


});


// create model

const contactModel = mongoose.model('Contact' ,contactSchema);

// export model to use it other files

module.exports = contactModel;