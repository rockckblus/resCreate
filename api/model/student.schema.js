var mongoose = require('mongoose');
var studentSchema = new mongoose.Schema({
    studenName: String,
    classId: {
//        type: mongoose.Schema.objectId,
        type: Number,
        ref: 'class'
    }
});

/**
 * 挂载返回对象上的 方法
 * 传入 学生id 返回班级
 * 16/2/29 */
studentSchema.statics = {
    findClassNameByStudentId: function (studentId, callBack) {
        return this
            .findOne({_id: studentId})
            .exec(callBack);
    }
};

module.exports = studentSchema;