// blazerid, description, priceperday, availability

// GJ212P-36
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    blazerid:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    priceperday:{
        type:String,
        required:true,
        unique:true
    },
    availability:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true,
        unique:true
    },
});

const Blazer = mongoose.model('blazer',schema)

module.exports= Blazer;
