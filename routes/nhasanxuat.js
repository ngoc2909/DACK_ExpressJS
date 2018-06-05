var express = require('express');
var router = express.Router();

var nhasanxuat = require('../controllers/nhasanxuat');

// Create a new Note
router.post('/nhasanxuat', nhasanxuat.create);

// Retrieve all
router.get('/nhasanxuat', nhasanxuat.findAll);

// Retrieve a single
router.get('/nhasanxuat/:nhasanxuatId',nhasanxuat.findOne);

// Update
router.put('/nhasanxuat/:nhasanxuatId', nhasanxuat.update);

// Delete
router.delete('/nhasanxuat/:nhasanxuatId', nhasanxuat.delete);


module.exports = router;
