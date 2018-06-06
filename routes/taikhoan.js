var express = require('express');
var router = express.Router();

var taikhoan = require('../controllers/taikhoan');

// Create a new Note
router.post('/taikhoan', taikhoan.create);

// Retrieve all
router.get('/taikhoan', taikhoan.findAll);

// Retrieve a single
router.get('/taikhoan/:taikhoanId',taikhoan.findOne);

// Update
router.put('/taikhoan/:taikhoanId', taikhoan.update);

// Delete
router.delete('/taikhoan/:taikhoanId', taikhoan.delete);

module.exports = router;
