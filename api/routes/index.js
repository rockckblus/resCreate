var express = require('express');
var mongoose = require('mongoose');
var classModel = require('../model/class.model');
var studentModel = require('../model/student.model');
var router = express.Router();
mongoose.connect('mongodb://127.0.0.1/test');
var db = mongoose.connection;

/* GET home page. */
router.get('/', function (req, res, next) {
    db.once('open', open);
    function open() {
        console.log('open');
    }

    res.json('');
});
module.exports = router;
