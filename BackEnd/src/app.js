const express=require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const cookieParser= require('cookie-parser');



const signupRouter = require('./routes/signup.routes');


const app=express()
dotenv.config();
app.use(express.json())
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN
    }
))
app.use(cookieParser())
app.use('/api/signup',signupRouter)

module.exports={app}