const {connection} = require("./db/MongoDB");
const dotenv = require('dotenv');
const express=require('express');
const router = require("./routes/user.routes");

dotenv.config();
const app= express()
app.use(express.json())
connection();
app.use('/',router)

app.listen(process.env.PORT||3000,()=>{
    console.log(`Server is running in ${process.env.PORT?process.env.PORT:3000}`)
})