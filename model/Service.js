const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    serviceTitle: {
        type: String,
        required: [true, 'Please Service is required'],
    },
      price: {
        type: Number,
        required: [true, 'Please price is required'],
    },
    description: {
        type: String,
        required: [true, 'Please description is required'],
    },
    image: {
        type: String,
        required: [true, 'Please image is required'],
    },

});

const Service = mongoose.model('Service', serviceSchema);

module.exports = {Service};