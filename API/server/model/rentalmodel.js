// userid, rental start date,   rental end date, total cost, rental status

// GJ212P-36
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    startdate: {
        type: Date,
        required: true
    },
    enddate: {
        type: Date,
        required: true
    },
    totalcost: {
        type: Number,
        required: true
    },
    rentalstatus: {
        type: String,
        required: true
    }
});


const Rental = mongoose.model('rental',schema)

module.exports= Rental;