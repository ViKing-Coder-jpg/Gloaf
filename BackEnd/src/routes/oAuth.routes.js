const express=require('express')
const {signupGoogle,signupGoogleCallback,getToken, checkToken}=require('../controllers/oAuth.controllers.js')
const router=express.Router()

router.get('/google',signupGoogle)
router.get('/google/callback',signupGoogleCallback)
router.get('/token',getToken)
router.post('/checkToken',checkToken)

module.exports=router;