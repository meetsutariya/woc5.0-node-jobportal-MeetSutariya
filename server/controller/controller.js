var Studentdb = require('../model/model')

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
        password: req.body.pass
        
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
                // console.log(data)
                res.send(data)
                // res.redirect("/")
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error update user information" })
        })

}