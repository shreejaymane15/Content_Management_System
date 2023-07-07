const express = require('express');
const dotenv = require('dotenv');
// const jwt = require('jsonwebtoken');


// const adminRelatedRoute = require('./Routes/admin');
const loginRelatedRoute = require('./Routes/login');
const userRelatedRoute = require('./Routes/user');

const app = express();

dotenv.config();
app.use((request, response, next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods', "*")
    next();
})

app.use(express.json());

app.use('/login', loginRelatedRoute);
app.use('/user', userRelatedRoute);

// app.use('/admin', adminRelatedRoute);

const portNo = process.env.PORT;
app.listen(portNo,()=>{console.log("Server Started at " + portNo)});
