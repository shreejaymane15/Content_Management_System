const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');
//const jwt = require('jsonwebtoken');

dotenv.config;
appForUser = express.Router();

var connection = mysql.createConnection({
    host    :   'localhost',//process.env.HOST,
    user    :   'Shreejay',//process.env.USER,
    password:   'Shreejay',//process.env.PASSWORD,
    database:   'CMS'//process.env.DATABASE
});

appForUser.post("/", (request, response)=>{
    let query = `SELECT token from user where user_id = '${request.body.id}'`
    connection.query(query, (error, result)=>{
        if(error==null)
        {
            if(result[0]!= null && result[0].token == request.body.token){
                response.send('true');
            }
            else{
                response.send('false');
            }
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
    });
});


module.exports = appForUser;
