const mysql = require('mysql');

const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASS,
    port:DB_PORT,
    database:DB_NAME,
});

module.exports = connection;
