const db = require('../mysqldb/dbcon');

const create = (data,callback)=>{
    
    db.query("INSERT INTO  users SET ? ",data,(error,response)=>{
        if(error){
            callback(error);
        }
        callback(null,response);
    });
};

const getUsers = (callback)=>{
    db.query("SELECT * FROM users",(error,response)=>{
        if(error){
            callback(error);
        };
        callback(null,response)
    });
};

const getUserById = (id,callback)=>{
    db.query("SELECT * FROM users WHERE id=?",[id],(error,response)=>{
        if(error){
            callback(error);
        };
        callback(null,response[0]);
    });
};

const deleteUserById = (id,callback)=>{
    db.query("DELETE FROM users WHERE id = ?",[id],(error,response)=>{
        if(error){
            callback(error);
        }
        callback(null,response[0]);
    })
};

const updatUser = (id,data,callback)=>{
    const updates = Object.keys(data);
    const allowedUpdates = ["firstname","lastname","email","password"];
    const isValidKey = updates.every((update)=>{
        return allowedUpdates.includes(update);
    });

    if(!isValidKey){
        callback("not valid key");
    }else{
        db.query("UPDATE users SET ? WHERE id='"+id+"'",data,(error,response)=>{
            if(error){
                callback(error);
            }
            callback(null,response);
        })
    }
}


module.exports = {
    create,
    getUsers,
    getUserById,
    deleteUserById,
    updatUser
};
