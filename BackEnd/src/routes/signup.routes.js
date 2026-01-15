const express=require('express')
const {signupSSO}=require('../controllers/signup.controllers')
const router=express.Router()

router.post('/sso',signupSSO);

module.exports=router;