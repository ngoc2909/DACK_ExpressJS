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
router.get('/QuanLyLoaiSanPham', function (req, res) {
    res.render('./admin/QuanLyLoaiSanPham');
});
router.get('/QuanLyNhaSanXuat', function (req, res) {
    res.render('./admin/QuanLyNhaSanXuat');
});
router.get('/QuanLyTaiKhoan', function (req, res) {
    res.render('./admin/QuanLyTaiKhoan');
});
module.exports = router;
