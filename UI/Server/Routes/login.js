const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');

dotenv.config;
appForLogin = express.Router();

var connection = mysql.createConnection({
    host    :   'localhost',//process.env.HOST,
    user    :   'Shreejay',//process.env.USER,
    password:   'Shreejay',//process.env.PASSWORD,
    database:   'CMS'//process.env.DATABASE
});


appForLogin.post("/", (request, response)=>{
    // console.log(request.body);
    let query = `SELECT user_id from user where email = '${request.body.email}' && password = '${request.body.password}'`
    connection.query(query, (error, result)=>{
        if(error==null)
        {
            // console.log(result[0].user_id)
            let pdata = Date.now()+result[0].user_id;
            var jwtSecretKey = process.env.JWT_SECRET_KEY;
            const token = jwt.sign(pdata, jwtSecretKey);
            let query = `UPDATE user SET token = '${token}' where user_id = ${result[0].user_id}`;
            connection.query(query, (error, result1)=>{
                if(error==null){
                    let sdata = {'token':token, 'user_id':result[0].user_id};
                    response.send(sdata);
                }
                else{
                    console.log(error);
                    response.setHeader("Content-Type","application/json");
                    response.write(error);
                }
            });
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
    });
});


module.exports = appForLogin;

