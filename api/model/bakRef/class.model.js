var mongoose = require('mongoose');
var classSchema = require('./class.schema.js');//班级Schema
var classModel = mongoose.model('class', classSchema);//班级model
//var classModel = {};


module.exports = classModel;


