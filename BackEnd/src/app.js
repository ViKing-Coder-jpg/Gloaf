const express=require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const cookieParser= require('cookie-parser');



const signupRouter = require('./routes/signup.routes');
const loginRouter = require('./routes/login.routes');
const googleOAuthRouter=require('./routes/googleOAuth.routes')


const app=express()
dotenv.config();
app.use(express.json())
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
))
app.use(cookieParser())
app.use('/api/signup',signupRouter)
app.use('/api/login',loginRouter)
app.use('/api/auth/google',googleOAuthRouter)

module.exports={app}