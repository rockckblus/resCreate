var express = require('express');
var mongoose = require('mongoose');
var classModel = require('../model/class.model.js');
var studentModel = require('../model/student.model.js');
var router = express.Router();
mongoose.connect('mongodb://127.0.0.1/test');
var db = mongoose.connection;


/* GET home page. */
router.get('/', function (req, res, next) {

    classModel.save({
        name:'zhangSan'
    })

    res.json('11');
});
module.exports = router;
