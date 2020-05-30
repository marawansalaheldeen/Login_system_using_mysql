require('dotenv').config();
const express = require('express');
const userRouter = require('./api/router');

const app = express();

app.use(express.json());
app.use(userRouter);


const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is up on port ${port}`);
});

