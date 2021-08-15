const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceTitle: String,
    price:Number,
    description: String,
    image: String

});

const Service = mongoose.model('Service', serviceSchema);

module.exports = {Service};