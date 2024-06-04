const mongoose = require('mongoose');

const userschema = new mongoose.Schema({

    firstname:{
        type : String,
        required : true,
        unique : true
    },
    lastname:{
        type : String,
        required : true,
        unique : true
    },

    email:{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String
    },
    c_password:{
        type:String
    }
});

const modal = mongoose.model('modals',userschema);

module.exports = modal;