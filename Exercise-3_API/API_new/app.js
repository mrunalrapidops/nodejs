const express = require('express');
const morgon =require('morgan');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');

//connect with mongoose Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/APIAuthentication', { useNewUrlParser: true });

const app = express();

app.use(morgon('dev'));
//parsing body of output
app.use(bodyParser.json());

app.use('/users',require('./routers/users'))

//Server Start
const port = 8080;
app.listen(port);
console.log(`server listen @ ${port}`);