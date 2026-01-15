const express =require('express')
const {userLoginSearch}=require('./user.controllers.js')
const {partnerLoginSearch}=require('./partner.controllers.js')
const {jwtsign}=require('../utils/oauth.js')



const options={
    httpOnly:true,
    secure:true
}
const loginSSO = async (req,res) =>{
    const {type}=req.body
    try{
    if(type=='Customer'){
        await userLoginSearch(req,res);
        const acessToken=await jwtsign(req,res,'1h','a');
        const refreshToken=await jwtsign(req,res,'5d','r');
        res.status(201).cookie('acessToken',acessToken,options).cookie('refreshToken',refreshToken,options).json({'message':'Customer was Loggedin Successfully'})
        
    }else{
        await partnerLoginSearch(req,res);
        const acessToken=await jwtsign(req,res,'1h','a');
        const refreshToken=await jwtsign(req,res,'5d','r');
        res.status(201).cookie('acessToken',acessToken,options).cookie('refreshToken',refreshToken,options).json({'message':'Restaurant was Loggedin Successfully'})
    }}catch(err){
        console.log('Error in loginSSO controller',err)
    }
}

module.exports={
    loginSSO,
}