const { create } = require('./userservice');
const bcrypt = require('bcryptjs');

const createUser = (req,res)=>{
    const body = req.body;
    const saltRounds = 10;
    body.password = bcrypt.hashSync(body.password,saltRounds);
    create(body,(error,response)=>{
         
    })
}

