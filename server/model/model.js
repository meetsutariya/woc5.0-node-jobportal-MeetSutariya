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
    }
}) 

// var company_schema = new mongoose.Schema({
//     name:{
//         type: String,
//         required: true
//     }, 
//     email:{
//         type: String,
//         required: true,
//         unique: true
//     },
//     gender: String,
//     status: String
// }) 


//creating collection
const Studentdb = mongoose.model('studentdb', student_schema);  //(<collectionname>, <collectionshema>)
// const Companydb = mongoose.model('companydb', company_schema);  //(<collectionname>, <collectionshema>)

module.exports = Studentdb;
// module.exports = Companydb;