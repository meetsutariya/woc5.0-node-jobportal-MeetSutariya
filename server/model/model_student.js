const mongoose = require('mongoose')

var student_schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    cpi:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    graduation:{
        type: String,
        required: true
    },
    gender:String,
    skill:{
        type: String,
        required: true
    }
}) 




//creating collection
const Studentdb = mongoose.model('studentdb', student_schema);  //(<collectionname>, <collectionshema>)

module.exports = Studentdb;