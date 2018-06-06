var db = require('./manageDB');

exports.findAll = function (callback)
{
    db.executeQuery("select * from taikhoan", function (err, data){
        callback(err, data);
    });
}
exports.create = function(taikhoan, callback){
    db.executeQuery("INSERT INTO `'qldanhsach`.`taikhoan` SET ?", taikhoan, callback);
}

exports.delete = function (taikhoanId, callback) {
    db.executeQuery("DELETE from `'qldanhsach`.`taikhoan` WHERE matk = ?",taikhoanId,callback);
}
exports.update = function (taikhoan, callback) {
    db.executeQuery("update `'qldanhsach`.`taikhoan` set ? where `matk` = ?;",[taikhoan, taikhoan.id], callback);
}
exports.findOne = function (taikhoanId, callback) {
    db.executeQuery("select * from `'qldanhsach`.`taikhoan` where matk?", taikhoanId, callback);
}