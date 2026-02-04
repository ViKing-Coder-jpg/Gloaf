const express=require('express')
const {signupGoogle,signupGoogleCallback, sendToken}=require('../controllers/oAuth.controllers.js')
const router=express.Router()
const dotenv=require('dotenv')
dotenv.config()
require("../middlewares/googleOAuth.js");
const passport = require("passport");
const { jwtVerifyAccess } = require('../middlewares/oauth.js')


router.get('/google',signupGoogle())
router.get('/google/callback',passport.authenticate("google",{ session: false ,failureRedirect:`${process.env.FRONTEND_URL}/login`}),signupGoogleCallback)
router.post('/',jwtVerifyAccess)

module.exports=router;