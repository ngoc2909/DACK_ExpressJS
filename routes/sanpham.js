var express = require('express');
var router = express.Router();

var sanpham = require('../controllers/sanpham');

// Create a new Note
router.post('/sanpham', sanpham.create);

// Retrieve all
router.get('/sanpham', sanpham.findAll);

// Retrieve a single
router.get('/sanpham/:sanphamId',sanpham.findOne);

// Update
router.put('/sanpham/:sanphamId', sanpham.update);

// Delete
router.delete('/sanpham/:sanphamId', sanpham.delete);

module.exports = router;
