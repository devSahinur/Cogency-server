const express = require('express');
const route = express.Router();
const {createService, fetchAllService, fetchService, updateService, deleteService  } = require('../controller/serviceCtrl');

route.post('/service', createService)
route.get('/service', fetchAllService)
route.get('/service/:id', fetchService)
route.patch('/service/:id', updateService)
route.delete('/service/:id', deleteService)

module.exports = {route};