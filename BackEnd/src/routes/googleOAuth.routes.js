const express=require('express')
const {signupGoogle,signupGoogleCallback}=require('../controllers/googleOAuth.controllers.js')
const router=express.Router()

router.get('/',signupGoogle)
router.get('/callback',signupGoogleCallback)

module.exports=router;