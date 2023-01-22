var Studentdb = require('../model/model_student')
var Companydb = require('../model/model_company')

//create and save new user
exports.create_student = (req, res)=>{
     
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"});
        return;
    }

    //new user
    const user = new Studentdb({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.pass,
        gender: req.body.g1,
        age: req.body.age,
        graduation: req.body.gra_year,
        cpi: req.body.cpi,
        skill: req.body.skill
        
    })

    //save user in the database
    user.save(user)
        .then(data=>{
            // res.send(data)  
            res.redirect('/')
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });
}

exports.find_student = (req, res) => {

    const username_ = req.params.username;
    
    Studentdb.findOne({ username: username_ })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `May be user not found` })

            }
            else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error update user information" })
        })

}

//create and save new company
exports.create_company = (req, res)=>{
     
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"});
        return;
    }

    //new user
    const users = new Companydb({
        company_name: req.body.company_name,
        email: req.body.email,
        password: req.body.pass,
        website: req.body.website,
        position: req.body.position,
        package: req.body.package,
        re_cpi: req.body.re_cpi,
        re_skill: req.body.re_skill
        
    })

    //save users in the database
    users.save(users)
        .then(data=>{
            // res.send(data)  
            res.redirect('/')
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });
}

exports.find_company = (req, res) => {

    const company_name_ = req.params.company_name;
    
    Companydb.findOne({ company_name: company_name_ })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `May be user not found` })

            }
            else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error update user information" })
        })

}