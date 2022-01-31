const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('./DB');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {
    useNewUrlParser: true
})
.then( function onFulfilled () { console.log(`MongoDB connected...`) } )
.catch((err) => console.log('cannot connect to the databased' + err));

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT, function(){
    console.log(`Server is running on port:`, PORT);
});