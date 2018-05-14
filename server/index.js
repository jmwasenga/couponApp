const express = require('express');
const mongoose = require('mongoose');


require('./models/User');
require('./models/Business');
require('./models/Product');
require('./models/Customer');
//const bodyParser = require('body-parser');

const keys = require('./config/keys');

//database connection

mongoose.connect(keys.mongoURI);
const app = express();

require('./routes/productRoute')(app);

//This code runs only in production
if (process.env.NODE_ENV === 'production') {
    //Express will serve up production assets 
    //like our main.js file, or main.css file
    app.use(express.static('client/build'));


    //Express will serve up the index.html file
    //if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}


const PORT = process.env.PORT || 5000 //Detects if run on local machine to use port 5000 or remote to use heroku's provided

app.listen(PORT);
