const express=require('express')
const {loginSSO}=require('../controllers/login.controllers')
const router=express.Router()

router.post('/sso',loginSSO);

module.exports=router;