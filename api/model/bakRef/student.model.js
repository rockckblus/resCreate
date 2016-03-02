var mongoose = require('mongoose');
var StudentSchema = require('./student.schema.js');//班级Schema
var studentModel = mongoose.model('student', StudentSchema);//班级model

//var studentModel = {};
module.exports = studentModel;


