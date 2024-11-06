var express = require("express");
var mysql2 = require("mysql2");

var app = express();

var conn = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"employee"
})
app.get("/",(req,res)=>{
    res.send("hello")
})

conn.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("connected to database")
    }
})
var port = 3000;

app.listen(port,()=>{
    console.log(`localhost:${port}`)
})