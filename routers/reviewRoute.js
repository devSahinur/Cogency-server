const express = require('express');
const route = express.Router();
const {createReview, fetchAllReview, fetchReview, updateReview, deleteReview  } = require('../controller/reviewCtrl');

route.post('/review', createReview)
route.get('/review', fetchAllReview)
route.get('/review/:id', fetchReview)
route.patch('/review/:id', updateReview)
route.delete('/review/:id', deleteReview)

module.exports = route;