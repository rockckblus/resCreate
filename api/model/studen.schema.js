var mongoose = require('mongoose');
var studenSchema = new mongoose.Schema({
    studenName: String,
    classId: {
        type: mongoose.Schema.objectId,
        ref: 'class'
    }
});

/**
 * 挂载返回对象上的 方法
 * 传入 学生id 返回班级
 * 16/2/29 */
StudentSchema.statics = {
    findClassNameByStudentId: function (studentId, callBack) {
        return this
            .findOne({_id: studentId})
            .exec(callBack);
    }
};

module.exports = studenSchema;