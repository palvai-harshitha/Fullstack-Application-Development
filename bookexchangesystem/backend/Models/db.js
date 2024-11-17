//taking mongodb lib//
const mongoose =require('mongoose');
//connecting mongo db url from .env file to varaible//
const mongo_url = process.env.MONGO_CONN;

//checking whether mongo db is connected or not//
mongoose.connect(mongo_url)
    .then(()=>{
        console.log('database connected');
    }).catch((err)=>{
        console.log('database not connected',err);
    })