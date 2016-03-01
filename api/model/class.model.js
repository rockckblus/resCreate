var mongoose = require('mongoose');
var classSchema = require('./class.schema');//班级Schema
var classModel = mongoose.model('classModel', classSchema);//班级model
//var classModel = {};


module.exports = classModel;


