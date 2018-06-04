var db = require('./manageDB');

exports.findAll = function (callback)
{
    db.executeQuery("select * from banhang", function (err, data){
        callback(err, data);
    });
}
exports.create = function(sanpham, callback){
    db.executeQuery("INSERT INTO `'qldanhsach`.`banhang` SET ?", sanpham, callback);
}

exports.delete = function (sanphamId, callback) {
    db.executeQuery("DELETE from `'qldanhsach`.`banhang` WHERE masp = ?",sanphamId,callback);
}
exports.update = function (sanpham, callback) {
    db.executeQuery("update `'qldanhsach`.`banhang` set ? where `masp` = ?;",[sanpham, sanpham.id], callback);
}
exports.findOne = function (sanphamId, callback) {
    db.executeQuery("select * from `'qldanhsach`.`banhang` where masp=?", sanphamId, callback);
}
