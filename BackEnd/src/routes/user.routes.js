const express=require('express')
const {userCreate}=require('../controllers/user.controllers')
const router=express.Router()

router.post('/',userCreate);

module.exports=router;