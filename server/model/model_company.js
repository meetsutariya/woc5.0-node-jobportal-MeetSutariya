const mongoose = require('mongoose')

var company_schema = new mongoose.Schema({
    company_name:{
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
    re_cpi:{
        type: String,
        required: true
    },
    website:{
        type: String,
        required: true
    },
    package:{
        type: String,
        required: true
    },
    re_skill:{
        type: String,
        required: true
    },
    position:{
        type: String,
        require: true
    }
}) 

const Companydb = mongoose.model('companydb', company_schema);  //(<collectionname>, <collectionshema>)

module.exports = Companydb;
