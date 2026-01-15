const {connection} = require("./db/MongoDB");
const dotenv = require('dotenv');
const express=require('express');
const {app}=require('./app.js')


dotenv.config();
const startServer = async () => {
  try {
    await connection();
    console.log("DB connected");
  } catch (err) {
    console.error("DB connection failed", err);
    process.exit(1);
  }
};
startServer()

app.listen(process.env.PORT||3000,()=>{
    console.log(`Server is running in ${process.env.PORT?process.env.PORT:3000}`)
})