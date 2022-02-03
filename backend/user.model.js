const mongoose = require('mongoose');

let User = new mongoose.Schema ({
    user_id:String,
      first_name:String,
      last_name:String,
      contact_number:Number,
      email:String,
      position:String
    /*user_id: {
        type:Number,
        required: true,
    },
    first_name: {
        type: String, 
        lowercase: true, 
        required: true, 
        match: [/^[a-zA-Z0-9]+$/], 
        index: true},
    last_name: {
        type: String, 
        lowercase: true, 
        required: true, 
        match: [/^[a-zA-Z0-9]+$/], 
        index: true
    },
    contact_number: {
        type: Number,
        maxlength: 12,
        required: true,
    },
    email: {
        type: String, 
        lowercase: true, 
        required: true, 
        match: [/\S+@\S+\.\S+/], 
        index: true},
    position:  {
        type:String,
        default: "Basic",
        required: true,
    }*/
}, {timestamps: true});

module.exports=mongoose.model('UserInformations', User);