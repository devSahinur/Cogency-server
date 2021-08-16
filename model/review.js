const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: String,
    address:String,
    description: String,
    img: String,
    email: String

});

const Review = mongoose.model('Review', reviewSchema);

module.exports = {Review};