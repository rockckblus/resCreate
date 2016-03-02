var mongoose = require('mongoose');
var studentSchema = new mongoose.Schema({
    studenName: String,
    classId: {
        type : mongoose.Schema.ObjectId,
        ref: 'class'
    }
});


module.exports = studentSchema;