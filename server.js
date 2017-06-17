
Contact = require('./app/model/Contact.js');
require('dotenv').config();

const express = require('express'),
port =  3001,
cors    = require('cors'),
mongoose = require('mongoose'),
uriUtil = require('mongodb-uri'),
bodyParser = require('body-parser');
app = express();


const mongooseUri = uriUtil.formatMongoose(process.env.DB_URI);

//db options 
const dbOptions = {};

//setup app


//connect to mLab 
mongoose.connect(mongooseUri,dbOptions, ()=>{console.log(`connected to mLab database !${process.env.DB_URI}`)});
// in order to get data from angular app I have to configure 
//our app to use body parser json sending to urlencoded 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


//set the routes 
//app.use(require('./app/routes.js'));

app.post('/api/contacts', (req,res)=>{
    console.log('post to ');
    let newContact = new Contact (req.body);
    // contacts.push(newContact);
    newContact.save((err, contact)=>{
        if (err)
            throw err;
        
          res.json(contact);  

    })
    // res.json(newContact);
})




app.listen(port, ()=>{
    console.log(`app is up and running on ${port}`);
})

