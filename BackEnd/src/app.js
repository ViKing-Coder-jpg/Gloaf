const express=require('express')
const cors = require('cors')
const dotenv = require('dotenv');



const userRouter = require("./routes/user.routes");


const app=express()
dotenv.config();
app.use(express.json())
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN
    }
))
app.use('/',userRouter)

module.exports={app}