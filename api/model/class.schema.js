var mongoose = require('mongoose');
var classSchema = new mongoose.Schema(function () {
    name:String
});
module.exports = classSchema;