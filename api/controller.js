const { create } = require('./userservice');
const bcrypt = require('bcryptjs');

const createUser = (req,res)=>{
    const salt = bcrypt.genSaltSync(10);
    const hashedpassword = bcrypt.hashSync(req.body.password,salt);
    console.log(hashedpassword)

    const sqldata = {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:hashedpassword
    }

    create(sqldata,(error,response)=>{
        if(error){
            console.log(error);
             res.status(500).send(error)
        }
         res.status(201).send(response);
    })
}

module.exports = {
    createUser
}

