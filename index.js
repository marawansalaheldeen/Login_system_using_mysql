require('dotenv').config();
const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.send("<h1>NODE APP</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is up on port ${port}`);
});

