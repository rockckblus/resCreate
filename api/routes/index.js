var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
mongoose.connect('mongodb://127.0.0.1/test');


var db = mongoose.connection;
var Kitten, kittySchema, StudentSchema, StudentSchemaModel;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    // yay!
    console.log('open');
    kittySchema = new mongoose.Schema({
        title: String,
        categoryId: Number,
        author: String,
        body: String,
        comments: [
            { body: String, date: Date }
        ],
        date: { type: Date, default: Date.now },
        hidden: Boolean,
        meta: {
            votes: Number,
            favs: Number
        }
    });
    Kitten = db.model('Kitten', kittySchema);

    StudentSchema = new mongoose.Schema({
        name: String,
        clazzID: {
            type: mongoose.Schema.ObjectId,
            ref: 'Kitten'
        }
    })
    StudentSchemaModel = db.model('student', StudentSchema);
});

var i = 0;
/* GET home page. */
router.get('/', function (req, res, next) {

    var silence = new Kitten({ title: 'Silence', categoryId: 4 });
    var ref = new StudentSchemaModel({name: 'ma', clazzId:{type:'56d2b122d3ca498673009102'}});
    ref.save(function (err, doc) {
        console.log('doc', doc);
    });

    silence.save(function (err, fluffy) {
        if (err) return console.error(err);
        console.log('fluffy', fluffy);
    });

//    var add = new Kitten({
//        'b': 'abcd'
//    });
//
//    add.save(function () {
//        if (err) {
//            console.error(err);
//        }
//        i++;
//    });

    Kitten.find({categoryId: 1}, function (err, docw) {
        res.json(docw);
    });

//
//    console.log('mongoose',mongoose,db);
//    var new2 = mongoose.model('new2',Schema);
////    var objM;
////    new2.findAll({}, function (err, doc) {
////        console.log('err',err,doc);
////        objM = doc;
//    });
});
module.exports = router;
