const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');
// const Connection = require('mysql2/typings/mysql/lib/Connection');
//const jwt = require('jsonwebtoken');

dotenv.config;
appForUser = express.Router();

var connection = mysql.createConnection({
    host    :   'localhost',//process.env.HOST,
    user    :   'Shreejay',//process.env.USER,
    password:   'Shreejay',//process.env.PASSWORD,
    database:   'CMS'//process.env.DATABASE
});

appForUser.get("/",(request, response)=>{
    let query = `SELECT topic_id, topic_name from topic`;
    connection.query(query, (error, result)=>{
        if(error == null){
            debugger;
            var data = JSON.stringify(result);
            response.setHeader("Content-Type", "application/json");
            response.write(data);
        }
        else{
            response.setHeader("Content-Type", "application/json");
            response.write(error);
        }
        response.end();
    })
})

module.exports = appForUser;
