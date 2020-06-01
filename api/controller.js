const { create,getUsers,getUserById,deleteUserById,updatUser } = require('./userservice');
const bcrypt = require('bcryptjs');

const createUser = async (req,res)=>{
    const salt = bcrypt.genSaltSync(10);
    const hashedpassword = bcrypt.hashSync(req.body.password,salt);
    console.log(hashedpassword);

    const sqldata = {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:hashedpassword
    }

    await create(sqldata,(error,response)=>{
        if(error){
             res.status(500).send(error);
        };
         res.status(201).send(response);
    });
};

const getAllUsers =async (req,res)=>{
    await getUsers((error,response)=>{
        if(error){
         res.status(500).send();
        };
        res.status(200).send(response);
    });
};

const findUserById = async (req,res)=>{
    const id = req.params.id;

    await getUserById(id,(error,response)=>{
        if(error){
            console.log(error);
            return;
        };
        if(!response){
            res.status(404).send("user not found");
        };
        res.send(response);
        
    });
};

const removingUser = async(req,res)=>{
    const id = req.params.id;
    await deleteUserById(id,(error,response)=>{
        if(error){
            res.status(500).send();
        };
        if(!response){
            res.status(404).send("user not found to delete");
        };
        res.send(response)
        console.log('user deleted');
    });
};

const updateUserById =async(req,res)=>{
    const id = req.params.id;

    const data = {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email
    };

    await updatUser(id,data,(error,response)=>{
        if(error){
            res.status(500).send();
        };
        if(!response){
            res.status(404).send("user not found");
        };
        res.send(response);
    });
};

module.exports = {
    createUser,
    getAllUsers,
    findUserById,
    removingUser,
    updateUserById
}

