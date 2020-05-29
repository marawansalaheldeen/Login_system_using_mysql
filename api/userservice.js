const db = require('../mysqldb/dbcon');

const create = (data,callback)=>{
    
    db.query("INSERT INTO  blogs SET ? ",data,(error,response)=>{
        if(error){
            callback(error);
        }
        callback(null,response)
    });
};

module.exports = create;