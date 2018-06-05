var db = require('./manageDB');

exports.findAll = function (callback)
{
    db.executeQuery("select * from nhasanxuat", function (err, data){
        callback(err, data);
    });
}
exports.create = function(nhasanxuat, callback){
    db.executeQuery("INSERT INTO `'qldanhsach`.`nhasanxuat` SET ?", nhasanxuat, callback);
}

exports.delete = function (nhasanxuatId, callback) {
    db.executeQuery("DELETE from `'qldanhsach`.`nhasanxuat` WHERE mansx = ?",nhasanxuatId,callback);
}
exports.update = function (nhasanxuat, callback) {
    db.executeQuery("update `'qldanhsach`.`nhasanxuat` set ? where `mansx` = ?;",[nhasanxuat, nhasanxuat.id], callback);
}
exports.findOne = function (nhasanxuatId, callback) {
    db.executeQuery("select * from `'qldanhsach`.`nhasanxuat` where mansx=?", nhasanxuatId, callback);
}