var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Website bán hàng ' });
});
router.get('/admin', function(req, res) {
    res.render('./admin/admin',{ title: 'Admin' });
});
router.get('/QuanLySanPham',function (req,res) {
    res.render('./admin/QuanLySanPham');
});
module.exports = router;
