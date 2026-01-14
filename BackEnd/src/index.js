const {connection} = require("./db/MongoDB");
const dotenv = require('dotenv');
const express=require('express');
const {app}=require('./app.js')


dotenv.config();
await connection();


app.listen(process.env.PORT||3000,()=>{
    console.log(`Server is running in ${process.env.PORT?process.env.PORT:3000}`)
})