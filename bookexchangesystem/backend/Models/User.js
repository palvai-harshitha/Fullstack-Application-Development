//creating a connection Schema with monggose //
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//creating the Schema or Coloumns for the Users Table//
const UserSchema = new Schema({
    username:{
        type : String,
        required: true,
    },
    email:{
        type : String,
        required: true,
        unique: true,
    },
    password:{
        type : String,
        required: true,
    },
    phone:{
        type : String,
        required: true,
    },
    location:{
        type : String,
        required: true,
    },
    reading_preference:{
        type : String,
        required: false,
    },
    favourite_genre:{
        type : String,
        required: false,
    },

});
//transfer the deatils to the users table//
const UserModel = mongoose.model('users',UserSchema);
module.exports = UserModel;