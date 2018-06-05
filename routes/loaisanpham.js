var express = require('express');
var router = express.Router();

var loaisanpham = require('../controllers/loaisanpham');

// Create a new Note
router.post('/loaisanpham', loaisanpham.create);

// Retrieve all
router.get('/loaisanpham', loaisanpham.findAll);

// Retrieve a single
router.get('/loaisanpham/:loaisanphamId',loaisanpham.findOne);

// Update
router.put('/loaisanpham/:loaisanphamId', loaisanpham.update);

// Delete
router.delete('/loaisanpham/:loaisanphamId', loaisanpham.delete);

module.exports = router;
