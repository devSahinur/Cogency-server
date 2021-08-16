const express = require('express');
const route = express.Router();
const {createAdmin, fetchAllAdmin, fetchAdmin, updateAdmin, deleteAdmin  } = require('../controller/adminCtrl');

route.post('/admin', createAdmin)
route.get('/admin', fetchAllAdmin)
route.get('/admin/:id', fetchAdmin)
route.patch('/admin/:id', updateAdmin)
route.delete('/admin/:id', deleteAdmin)

module.exports = route;