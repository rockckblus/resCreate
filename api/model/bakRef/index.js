var express = require('express');
var mongoose = require('mongoose');
var classModel = require('../model/class.model.js');
var studentModel = require('../model/student.model.js');
var router = express.Router();
mongoose.connect('mongodb://127.0.0.1/class');
var db = mongoose.connection;


/* GET home page. */
router.get('/', function (req, res, next) {

    /** 存班级  */
//    var saveClass = new classModel({
//        name: 'liSi'
//    });
//
//    saveClass.save();

    /** 存学生 班级 56d63dd316d69a3003261c18   */
//    var saveStudet = new studentModel({
//        studenName: 'ma123',
//        classId: '56d64246c23844de03d69c20'
//    });
//    saveStudet.save();

//    studentModel.find({}).
    classModel.find({}).
        populate('classId').
        exec(function (err, doc) {
            res.json(doc);
        });
});
module.exports = router;
