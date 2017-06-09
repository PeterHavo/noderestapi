express = require('express'),
port = process.env.PORT || 3001,
cors    = require('cors'),
bodyParser = require('body-parser');
app = express();

//setup app

// in order to get data from angular app I have to configure 
//our app to use body parser json sending to urlencoded 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


//set the routes 
app.use(require('./app/routes.js'));


app.listen(port, ()=>{
    console.log(`app is up and running on ${port}`);
})

