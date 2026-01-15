const express=require('express')
const {signupSSO,deleteAllSSO}=require('../controllers/signup.controllers')
const router=express.Router()

router.post('/sso',signupSSO);
router.delete('/sso/deleteAll',deleteAllSSO)


module.exports=router;