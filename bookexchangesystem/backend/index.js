//importig all the libraries//
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const BookRouter =require('./Routes/BookRouter');

//using .env variables and data base connection //
require('dotenv').config();
require('./Models/db');
//setting the backend to a port 8080 //
const   PORT =process.env.PORT || 8080;
//created a sample route to check the backend connection//
app.get('/test',(req,res)=>{
    res.send('hi bro ');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter);
app.use('/book',BookRouter)
app.listen(PORT,()=>{
    console.log('server ochindi dani port number ',PORT)
})