var express = require('express');
var mongoose = require('mongoose');
var classModel = require('../model/class.model.js');
var studentModel = require('../model/student.model.js');
var router = express.Router();
mongoose.connect('mongodb://127.0.0.1/test');
var db = mongoose.connection;


/* GET home page. */
router.get('/', function (req, res, next) {

    /** 存班级  */
//    var saveClass = new classModel({
//        name: 'zhangSan'
//    });
//
//    saveClass.save();

    /** 存学生 班级 56d62754c738943d7ae46856   */
    var saveStudet = new studentModel({
        studenName: 'ma1',
        classId: '56d62754c738943d7ae46856'
    });
    saveStudet.save();

    studentModel.find(function (err, doc) {
        res.json(doc);
    });

});
module.exports = router;
