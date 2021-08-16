const { Review } = require('../model/review')

// Create a new Review
const createReview = async (req, res) => {
    console.log(req.body);
    try {
        const review = await Review.create(req.body);
        res.json(review);
    } catch (error) {
        res.json(error);
    }
};

// Fetch all Review
const fetchAllReview = async (req, res) => {
    try {
        const review = await Review.find();
        res.json(review);
    } catch (error) {
        res.json(error);
    }
};

// Fetch a Review
const fetchReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        res.json(review);
    } catch (error) {
        res.json(error);
    }
};

// Update a Review
const updateReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, {
            $set: req.body
        });
        res.json(review);
    } catch (error) {
        res.json(error);
    }
};

// Delete a Review
const deleteReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndRemove(req.params.id);
        res.json(review);
    } catch (error) {
        res.json(error);
    }
}

module.exports = {createReview, fetchAllReview, deleteReview, updateReview, fetchReview};

