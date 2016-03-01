var mongoose = require('mongoose');
var StudentSchema = require('./student.schema');//班级Schema
var studentModel = mongoose.model('studentModel', StudentSchema);//班级model

module.exports = studentModel;


